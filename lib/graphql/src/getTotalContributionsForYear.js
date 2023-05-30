import { requestGraphql } from "./requestGraphql";
import { meta } from "/config";

/**
 * @param {number} year Year to get contributions for
 * @returns {Promise<number>} Total contributions for year
 * @description Returns total contributions for year
 * */
export async function getTotalContributionsForYear(year) {
 const from = `${year}-01-01T00:00:00Z`;
 const to = `${year}-12-31T23:59:59Z`;

 const { data } = await requestGraphql(
  `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`,
  {
   username: meta.accounts.github.username,
   from: from,
   to: to,
  }
 );

 return data.user.contributionsCollection.contributionCalendar.totalContributions;
}
