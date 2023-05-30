import { meta } from "/config";
import { stripTypenames } from "/lib/utils";
import { requestGraphql } from "./requestGraphql";

/**
 * @param {number} type Type of repos
 * @param {number} count Number of repos
 * @returns {Promise<Object>} Repos
 * @description Returns repos
 * */
export async function GetRepos(type, count) {
 if (type.toUpperCase() === "PRIVATE") {
  const { data } = await requestGraphql(
   `
  query($username: String!, $count: Int!) {
    user(login: $username) {
      repositories(
        first: $count
        isFork: false
        isLocked: false
        privacy: PRIVATE
        orderBy: {field: STARGAZERS, direction: DESC}
        ownerAffiliations: OWNER
      ) {
        totalCount
      }
    }
  }
`,
   {
    username: meta.accounts.github.username,
    count: parseInt(count),
   }
  );

  return stripTypenames(data);
 } else {
  const { data } = await requestGraphql(
   `
  query($username: String!, $count: Int!, $type: RepositoryPrivacy!) {
    user(login: $username) {
      repositories(
        first: $count
        isFork: false
        isLocked: false
        privacy: $type
        orderBy: { field: STARGAZERS, direction: DESC }
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
   {
    username: meta.accounts.github.username,
    count: parseInt(count),
    type: type.toString().toUpperCase(),
   }
  );
  return stripTypenames(data);
 }
}
