import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

interface RepositoryNode {
 id: string;
 stargazerCount: number;
 forkCount: number;
}

interface RepositoryEdge {
 node: RepositoryNode;
}

interface Repositories {
 totalCount: number;
 totalDiskUsage: number;
 edges: RepositoryEdge[];
}

interface Followers {
 totalCount: number;
}

interface StarredRepositories {
 totalCount: number;
}

interface User {
 repositories: Repositories;
 followers: Followers;
 starredRepositories: StarredRepositories;
}

interface GraphqlResponse {
 data: {
  user: User | null;
 };
}

export async function GetUserData(): Promise<{
 userFollowers: number;
 userStarredRepos: number;
 userStars: number;
 userForks: number;
 userPublicRepositoriesCount: number;
 userPublicRepositoriesDiskUsage: number;
}> {
 const { data }: GraphqlResponse = await requestGraphql(
  `
    query($username: String!) {
      user(login: $username) {
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
  {
   username: meta.accounts.github.username,
  }
 );

 const { user } = data;
 if (!user) {
  throw new Error("User data not found");
 }

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
