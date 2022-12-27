import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { social } from "/config";

export default async function handler(req, res) {
 const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
 });

 const authLink = setContext((_, { headers }) => {
  return {
   headers: {
    ...headers,
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   },
  };
 });

 const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 });

 const publicData = await client.query({
  query: gql`
  {
   user(login: \"${social.github.username}\") {
     repositories(
       isFork: false
       isLocked: false
       privacy: PUBLIC
       last: 100
       orderBy: {field: STARGAZERS, direction: DESC}
       ownerAffiliations: OWNER
     ) {
       totalCount
       totalDiskUsage
       edges {
         node {
           ... on Repository {
             id
             stargazerCount
             forkCount
           }
         }
       }
     }
     ... on User {
       followers {
         totalCount
       }
       starredRepositories {
         totalCount
       }
     }
   }
 }
    `,
 });

 const userFollowers = publicData.data.user.followers.totalCount;
 const userStarredRepos = publicData.data.user.starredRepositories.totalCount;
 const userStars = publicData.data.user.repositories.edges.map((edge) => edge.node.stargazerCount).reduce((a, b) => a + b, 0);
 const userForks = publicData.data.user.repositories.edges.map((edge) => edge.node.forkCount).reduce((a, b) => a + b, 0);
 const userPublicRepositoriesCount = publicData.data.user.repositories.totalCount;
 const userPublicRepositoriesDiskUsage = publicData.data.user.repositories.totalDiskUsage;

 const result = {
  userFollowers,
  userStarredRepos,
  userStars,
  userForks,
  userPublicRepositoriesCount,
  userPublicRepositoriesDiskUsage,
 };

 res.status(200).json(result);
}
