import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

/**
 * @returns {Promise<Array>} Total years of contributions
 * @description Returns total years of contributions
 * */
export async function getTotalYears() {
 const { data } = await requestGraphql(
  `
       query($username: String!) {
    user(login: $username) {
         contributionsCollection {
           contributionYears
         }
       }
     }
   `,
  {
   username: meta.accounts.github.username,
  }
 );
 return data.user.contributionsCollection.contributionYears;
}
