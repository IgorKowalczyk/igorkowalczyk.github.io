import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { social } from "@/config";

const info = async (req, res) => {
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

 const public_data = await client.query({
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

 const user_followers = public_data.data.user.followers.totalCount;
 const user_starred_repos = public_data.data.user.starredRepositories.totalCount;
 const user_stars = public_data.data.user.repositories.edges.map((edge) => edge.node.stargazerCount).reduce((a, b) => a + b, 0);
 const user_forks = public_data.data.user.repositories.edges.map((edge) => edge.node.forkCount).reduce((a, b) => a + b, 0);
 const user_public_repositories_count = public_data.data.user.repositories.totalCount;
 const user_public_repositories_disk_usage = public_data.data.user.repositories.totalDiskUsage;

 const result = {
  user_followers,
  user_starred_repos,
  user_stars,
  user_forks,
  user_public_repositories_count,
  user_public_repositories_disk_usage,
 };

 res.status(200).json(result);
};

export default info;
