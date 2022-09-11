import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { social } from "@/config";

const info = async (req, res) => {
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

 const private_repos = await client.query({
  query: gql`
    {
      user(login: \"${social.github.username}\") {
       repositories(
         isFork: false
         isLocked: false
         privacy: PRIVATE
         first: 100
         orderBy: {field: STARGAZERS, direction: DESC}
         ownerAffiliations: OWNER
       ) {
         totalCount
         totalDiskUsage
       }
      }
    }
    `,
 });

 res.status(200).json(private_repos);
};

export default info;
