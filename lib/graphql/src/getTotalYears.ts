import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

interface ContributionsCollection {
 contributionYears: number[];
}

interface User {
 contributionsCollection: ContributionsCollection;
}

interface GraphqlResponse {
 data: {
  user: User | null;
 };
}

export async function getTotalYears(): Promise<number[]> {
 const { data }: GraphqlResponse = await requestGraphql(
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

 return data.user?.contributionsCollection.contributionYears ?? [];
}
