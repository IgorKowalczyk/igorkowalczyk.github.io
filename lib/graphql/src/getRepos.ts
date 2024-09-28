import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";
import { stripTypenames } from "@/lib/utils";

interface Topic {
 name: string;
}

interface RepositoryTopic {
 node: {
  topic: Topic;
 };
}

interface Language {
 name: string;
 color: string;
}

interface RepositoryNode {
 name: string;
 id: string;
 url: string;
 owner: {
  login: string;
 };
 description: string;
 isArchived: boolean;
 forkCount: number;
 repositoryTopics: {
  edges: RepositoryTopic[];
 };
 homepageUrl: string;
 stargazerCount: number;
 primaryLanguage: Language | null;
}

interface RepositoryEdge {
 node: RepositoryNode;
}

interface Repositories {
 totalCount: number;
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

export async function GetRepos(type: string, count: number): Promise<GraphqlResponse> {
 if (type.toUpperCase() === "PRIVATE") {
  const { data }: GraphqlResponse = await requestGraphql(
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
    count: parseInt(count.toString()),
   }
  );

  return stripTypenames(data);
 } else {
  const { data }: GraphqlResponse = await requestGraphql(
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
    count: parseInt(count.toString()),
    type: type.toString().toUpperCase(),
   }
  );
  return stripTypenames(data);
 }
}
