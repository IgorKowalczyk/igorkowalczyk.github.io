import NextLink from "next/link";
//import dynamic from "next/dynamic";
import { config } from "@/config";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
//const Container = dynamic(() => import("@components/Container"));
import Container  from "@components/Container";

export default function gitub_repos({ repositories }) {
 return (
  <Container title={`${config.title} - Github Repositories`}>
   <h1 className="my-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text px-8 text-center font-poppins text-[2rem] font-semibold text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff]">
    {config.author} Repositories ({repositories.length})
   </h1>
   <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
    {repositories &&
     repositories.map((repo) => (
      <div key={repo.id} className="rounded-[10px] border-[1px] border-black/[15%] bg-gradient-to-r p-5 duration-200 hover:scale-105 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100 dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
       <div className="text-left">
        <NextLink href={repo.url} key={repo.id}>
         <a className="break-all text-left font-poppins font-semibold" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline h-6 w-6 fill-black/[10%] stroke-black/[70%] duration-200 motion-reduce:transition-none dark:fill-white/[10%] dark:stroke-white/[70%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>{" "}
          s{repo.owner.login}/{repo.name}
         </a>
        </NextLink>
        {"  "}
        <span className="inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[55%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">
         {repo.isArchived ? (
          <>
           <svg xmlns="http://www.w3.org/2000/svg" className=" inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
           </svg>{" "}
           Archived
          </>
         ) : (
          <>
           <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
           </svg>{" "}
           Active
          </>
         )}
        </span>
       </div>
       <p className="text-left">
        {repo.description.substring(0, 90)}
        {repo.description.length > 90 ? "..." : ""}
       </p>
       <div className="text-left">
        {repo.repositoryTopics.edges.map((topic) => (
         <NextLink key={topic.node.topic.name} href={`https://github.com/topics/${topic.node.topic.name}`}>
          <a target="_blank">
           <span className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">{topic.node.topic.name}</span>
          </a>
         </NextLink>
        ))}
       </div>
       <div className="hide-scrollbar mt-2 flex snap-x snap-mandatory gap-1 overflow-hidden overflow-x-auto">
        <NextLink key="repo_lang" href={`${repo.url}/search?l=${repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}`}>
         <a target="_blank">
          <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
           <span className="mr-1 block h-[12px] w-[12px] rounded-full" style={{ backgroundColor: repo.primaryLanguage ? repo.primaryLanguage.color : "rgba(255, 255, 255, 0.5)" }}></span> {repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}
          </span>
         </a>
        </NextLink>
        <NextLink key="repo_stars" href={`${repo.url}/stargazers`}>
         <a target="_blank">
          <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
           <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
           </svg>{" "}
           {repo.stargazerCount} Stars
          </span>
         </a>
        </NextLink>
        <NextLink key="repo_forks" href={`${repo.url}/network/members`}>
         <a target="_blank">
          <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
           <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5 fill-black/[50%] duration-200 motion-reduce:transition-none dark:fill-white/[70%]" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
           </svg>{" "}
           {repo.forkCount} Forks
          </span>
         </a>
        </NextLink>
       </div>
      </div>
     ))}
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
 };
}
