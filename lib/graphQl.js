import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { meta } from "/config";

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

export async function getTotalYears() {
 const client = await Client();
 const { data } = await client.query({
  query: gql`
     query {
       user(login: \"${meta.accounts.github.username}\") {
         contributionsCollection {
           contributionYears
         }
       }
     }
   `,
  fetchPolicy: "cache-first",
 });
 return data.user.contributionsCollection.contributionYears;
}

async function getTotalContributionsForYear(year) {
 console.log(year);
 const client = await Client();
 const from = `${year}-01-01T00:00:00Z`;
 const to = `${year}-12-31T23:59:59Z`;

 const { data } = await client.query({
  query: gql`
     query {
       user(login: \"${meta.accounts.github.username}\") {
         contributionsCollection(from: "${from}", to: "${to}") {
           contributionCalendar {
             totalContributions
           }
         }
       }
     }
   `,
  fetchPolicy: "cache-first",
 });

 return data.user.contributionsCollection.contributionCalendar.totalContributions;
}

export async function getTotalContributionsForYears() {
 const results = [];
 const years = await getTotalYears();
 for (const year of years) {
  const totalContributions = await getTotalContributionsForYear(year);
  results.push({ year, totalContributions });
 }
 return results;
}

export async function GetRepos(type, count) {
 const client = await Client();

 const { data } = await client.query({
  query: gql`
 {
   user(login: \"${meta.accounts.github.username}\") {
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
     user(login: \"${meta.accounts.github.username}\") {
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

 const query = await client.query({
  query: gql`
  {
   user(login: \"${meta.accounts.github.username}\") {
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

 const { user } = query.data;
 const { followers, starredRepositories, repositories } = user;
 const stars = repositories.edges.reduce((sum, { node }) => sum + node.stargazerCount, 0);
 const forks = repositories.edges.reduce((sum, { node }) => sum + node.forkCount, 0);

 const result = {
  userFollowers: followers.totalCount,
  userStarredRepos: starredRepositories.totalCount,
  userStars: stars,
  userForks: forks,
  userPublicRepositoriesCount: repositories.totalCount,
  userPublicRepositoriesDiskUsage: repositories.totalDiskUsage,
 };

 return result;
}
