import "server-only";

import { meta } from "/config";
import { stripTypenames } from "./utils";
import url from "url";

/**
 * @param {string} query Query
 * @returns {Promise<any>} Data
 * */
export async function requestGraphql(query) {
 const data = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
   Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
 });
 return data.json();
}

/**
 * @returns {Promise<Array>} Total years of contributions
 * @description Returns total years of contributions
 * */
export async function getTotalYears() {
 const { data } = await requestGraphql(`
     query {
       user(login: "${meta.accounts.github.username}") {
         contributionsCollection {
           contributionYears
         }
       }
     }
   `);
 return data.user.contributionsCollection.contributionYears;
}

/**
 * @param {number} year Year
 * @returns {Promise<number>} Total contributions for year
 * @description Returns total contributions for year
 * */
export async function getTotalContributionsForYear(year) {
 const from = `${year}-01-01T00:00:00Z`;
 const to = `${year}-12-31T23:59:59Z`;

 const { data } = await requestGraphql(`
     query {
       user(login: "${meta.accounts.github.username}") {
         contributionsCollection(from: "${from}", to: "${to}") {
           contributionCalendar {
             totalContributions
           }
         }
       }
     }
   `);

 return data.user.contributionsCollection.contributionCalendar.totalContributions;
}

/**
 * @returns {Promise<Object>} Total contributions for years
 * @description Returns total contributions for years
 * */
export async function getTotalContributionsForYears() {
 const results = [];
 let total = 0;
 const years = await getTotalYears();
 const since = years[years.length - 1];
 const to = 0;
 for (const year of years) {
  const totalContributions = await getTotalContributionsForYear(year);
  results.push({ year, totalContributions });
  total += totalContributions;
 }
 return { results, total, dates: { since, to } };
}

/**
 * @param {number} type Type of repos
 * @param {number} count Number of repos
 * @returns {Promise<Object>} Repos
 * @description Returns repos
 * */
export async function GetRepos(type, count) {
 if (type.toUpperCase() === "PRIVATE") {
  const { data } = await requestGraphql(`
      {
        user(login: "${meta.accounts.github.username}") {
          repositories(
            first: ${count}
            isFork: false
            isLocked: false
            privacy: PRIVATE
            orderBy: {field: STARGAZERS, direction: DESC}
            ownerAffiliations: OWNER
          ) {
            totalCount
          }
        }
      }`);

  return stripTypenames(data);
 } else {
  const { data } = await requestGraphql(`
 {
   user(login: "${meta.accounts.github.username}") {
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
 `);

  return stripTypenames(data);
 }
}

/**
 * @returns {Promise<Object>} Popular repos
 * @description Returns popular repos
 * */
export async function GetPopular() {
 const { data } = await requestGraphql(`
    {
     user(login: "${meta.accounts.github.username}") {
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
`);
 return stripTypenames(data.user);
}

/**
 * @returns {Promise<Object>} User data
 * @description Returns user data
 * */
export async function GetUserData() {
 const { data } = await requestGraphql(`
  {
   user(login: "${meta.accounts.github.username}") {
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
    `);

 const { user } = data;
 const { followers, starredRepositories, repositories } = user;
 const stars = repositories.edges.reduce((sum, { node }) => sum + node.stargazerCount, 0);
 const forks = repositories.edges.reduce((sum, { node }) => sum + node.forkCount, 0);

 return {
  userFollowers: followers.totalCount,
  userStarredRepos: starredRepositories.totalCount,
  userStars: stars,
  userForks: forks,
  userPublicRepositoriesCount: repositories.totalCount,
  userPublicRepositoriesDiskUsage: repositories.totalDiskUsage,
 };
}

export async function GetOGImage(repo, owner) {
 if (!repo || !owner) return null;
 if (owner !== meta.accounts.github.username) return null;
 const { data } = await requestGraphql(`
  {
   repository(name: "${repo}", owner: "${owner}") {
    openGraphImageUrl
    isPrivate
    description
    languages(first: 10) {
     edges {
      size
      node {
       color
       name
      }
     }
     totalSize
    }
    owner {
     avatarUrl
     ... on User {
      name
     }
    }
    stargazerCount
   }
  }
 `);
 if (!data || !data.repository) return null;
 const domain = url.parse(data.repository?.openGraphImageUrl).hostname.replace("www.", "");
 return {
  domain,
  private: data.repository?.isPrivate,
  og: data.repository?.openGraphImageUrl,
  languages: data.repository?.languages?.edges.sort((a, b) => b.size - a.size),
  totalSize: data.repository?.languages?.totalSize,
  description: data.repository?.description,
  owner: {
   avatar: data.repository?.owner?.avatarUrl,
   name: data.repository?.owner?.name,
  },
  stargazerCount: data.repository?.stargazerCount,
 };
}
