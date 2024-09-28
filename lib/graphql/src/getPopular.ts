import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";
import { stripTypenames } from "@/lib/utils";

interface Language {
 name: string;
 color: string;
}

interface RepositoryNode {
 name: string;
 url: string;
 owner: {
  login: string;
 };
 description: string;
 isArchived: boolean;
 forkCount: number;
 id: string;
 homepageUrl: string;
 stargazerCount: number;
 primaryLanguage: Language | null;
}

interface RepositoryEdge {
 node: RepositoryNode;
}

interface Repositories {
 edges: RepositoryEdge[];
}

interface User {
 repositories: Repositories;
}

interface GraphqlResponse {
 data: {
  user: User | null;
 };
}

export async function GetPopular(): Promise<User | null> {
 const { data }: GraphqlResponse = await requestGraphql(
  `
    query($username: String!) {
      user(login: $username) {
        repositories(
          isFork: false
          isLocked: false
          privacy: PUBLIC
          first: 2
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
                homepageUrl
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

 if (!data || !data.user) return null;

 return stripTypenames(data.user);
}
