import { meta } from "/config";
import { stripTypenames } from "/lib/utils";
import { requestGraphql } from "./requestGraphql";

/**
 * @returns {Promise<Object>} Popular repos
 * @description Returns popular repos
 * */
export async function GetPopular() {
 const { data } = await requestGraphql(
  `
  query($username: String!) {
    user(login: $username) {
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
  {
   username: meta.accounts.github.username,
  }
 );
 return stripTypenames(data.user);
}
