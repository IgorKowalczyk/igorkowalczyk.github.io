import { meta } from "@/config";
import { requestGraphql } from "@/lib/graphql/src/requestGraphql";

export async function GetOGImage(repo, owner) {
 if (!repo || !owner) return null;
 if (owner !== meta.accounts.github.username) return null;
 const { data } = await requestGraphql(
  `
  query($repo: String!, $owner: String!) {
    repository(name: $repo, owner: $owner) {
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
`,
  {
   repo,
   owner,
  }
 );
 if (!data || !data.repository) return null;
 const domain = new URL(data.repository?.openGraphImageUrl).hostname.replace("www.", "");
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
