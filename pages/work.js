import dynamic from "next/dynamic";
import { config } from "@/config";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container } from "@components/elements/Container";
import { RepoCard } from "@components/elements/RepoCard";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Squares = dynamic(() => import("@components/decorations/Squares"));

export default function gitub_repos({ repositories }) {
 return (
  <Container title={`${config.title} - Github Repositories`}>
   <div className="fixed top-full right-full z-[-1] translate-x-1/2 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>
   <h1 className="my-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text px-8 text-center font-poppins text-[2rem] font-semibold text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff]">
    {config.author} Repositories ({repositories.length})
   </h1>
   <div className="mx-8">
    <div className="!m-[0_auto] !my-9 mx-8 hidden w-fit rounded-[10px] border-[1px] border-black/[15%] bg-white p-4 font-poppins duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b] md:block">
     <GitHubCalendar
      username="igorkowalczyk"
      showWeekdayLabels="true"
      theme={{
       level0: "rgba(var(--calendar-default))",
       level1: "#9be9a8",
       level2: "#40c463",
       level3: "#30a14e",
       level4: "#216e39",
      }}
     >
      <ReactTooltip html delayShow={100} delayHide={100} resizeHide={true} effect="float" backgroundColor="rgba(0, 0, 0)" />
     </GitHubCalendar>
    </div>
   </div>
   <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
    {repositories && repositories.map((repo) => <RepoCard key={repo.id} {...repo} />)}
    <div className="fixed top-full left-full z-[-1] -translate-x-1/2 -translate-y-full transform">
     <Squares w="404" h="404" />
    </div>
   </div>
  </Container>
 );
}

export async function getStaticProps() {
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
    user(login: \"${config.social.github.username}\") {
      repositories(
        first: 50
        isFork: false
        isLocked: false
        privacy: PUBLIC
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
 return {
  props: {
   repositories,
  },
  revalidate: 60,
 };
}
