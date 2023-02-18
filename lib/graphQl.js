import "server-only";

import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { social } from "/config";

export async function Client() {
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

 return client;
}

export async function GetRepos(type, count) {
 const client = await Client();

 const { data } = await client.query({
  query: gql`
 {
   user(login: \"${social.github.username}\") {
     repositories(
       first: ${count}
       isFork: false
       isLocked: false
       privacy: ${type.toUpperCase()}
       orderBy: {field: STARGAZERS, direction: DESC}
       ownerAffiliations: OWNER
     ) {
       totalCount
       edges {
         node {
           ... on Repository {
             name
             id
             url
             owner {
               login
             }
             description
             isArchived
             forkCount
             repositoryTopics(first: 4) {
               edges {
                 node {
                   topic {
                     name
                   }
                 }
               }
             }
             stargazerCount
             primaryLanguage {
               name
               color
             }
           }
         }
       }
     }
   }
 }
 `,
  fetchPolicy: "cache-first",
 });

 return data;
}

export async function GetPopular() {
 const client = await Client();

 const { data } = await client.query({
  query: gql`
    {
     user(login: \"${social.github.username}\") {
       repositories(
         isFork: false
         isLocked: false
         privacy: PUBLIC
         first: 6
         orderBy: {field: STARGAZERS, direction: DESC}
         ownerAffiliations: OWNER
       ) {
         edges {
           node {
             ... on Repository {
               name
               url
               owner {
                 login
               }
               description
               isArchived
               forkCount
               id
               stargazerCount
               primaryLanguage {
                 name
                 color
               }
             }
           }
         }
       }
     }
   }
`,
  fetchPolicy: "cache-first",
 });

 return data.user;
}

export async function GetUserData() {
 const client = await Client();

 const user = await client.query({
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
  fetchPolicy: "cache-first",
 });

 const userFollowers = user.data.user.followers.totalCount;
 const userStarredRepos = user.data.user.starredRepositories.totalCount;
 const userStars = user.data.user.repositories.edges.map((edge) => edge.node.stargazerCount).reduce((a, b) => a + b, 0);
 const userForks = user.data.user.repositories.edges.map((edge) => edge.node.forkCount).reduce((a, b) => a + b, 0);
 const userPublicRepositoriesCount = user.data.user.repositories.totalCount;
 const userPublicRepositoriesDiskUsage = user.data.user.repositories.totalDiskUsage;

 const result = {
  userFollowers,
  userStarredRepos,
  userStars,
  userForks,
  userPublicRepositoriesCount,
  userPublicRepositoriesDiskUsage,
 };

 return result;
}
