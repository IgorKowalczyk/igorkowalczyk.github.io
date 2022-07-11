import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { social } from "@/config";

// Type: [private, public]
// Count: Number of repos to return [min 0, max 50]
const info = async (req, res) => {
 const { query } = req.query;
 const type = query[0].toLowerCase();
 const count = query[1].toLowerCase();
 if (type !== "private" && type !== "public") {
  return res.status(400).json({
   error: "Invalid type",
  });
 }
 if (isNaN(count)) {
  return res.status(400).json({ error: "Invalid count" });
 } else if (count <= 0) {
  return res.status(400).json({
   error: "Count must be greater than 0",
  });
 } else if (count > 50) {
  return res.status(400).json({
   error: "Count must be less than 50",
  });
 }
 const httpLink = createHttpLink({
  uri: "https://api.github.com/graphql",
 });

 const authLink = setContext((_, { headers }) => {
  return {
   headers: {
    ...headers,
    authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   },
  };
 });

 const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
 });

 const { data } = await client.query({
  query: gql`
  {
    user(login: \"${social.github.username}\") {
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
  `,
 });

 const { user } = data;
 const repositories = user.repositories.edges.map((edge) => edge.node);
 res.status(200).json(repositories);
};

export default info;
