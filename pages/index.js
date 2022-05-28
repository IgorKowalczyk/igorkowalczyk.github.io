import NextLink from "next/link";
import { config } from "@/config";
import { ConvertBytes } from "@lib/convertBytes";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container } from "@components/Container";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { RepoCard } from "@components/RepoCard";

export default function main({ repositories, user }) {
 const [isMouted, setMouted] = useState(false);
 useEffect(() => {
  setTimeout(() => {
   setMouted(true), [];
  }, 300);
 });

 return (
  <Container title={`${config.title} - Full-stack developer`}>
   <Transition show={isMouted} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100 duration-200" leave="transition duration-500 ease-out" leaveFrom="opacity-100" leaveTo="opacity-0">
    <div className="pointer-events-none absolute left-0 -top-1/2 bottom-0 right-0 z-[-1] bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#336FEF40_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#336FEF2B_301.88deg,transparent_1turn)] blur-[160px] duration-200 will-change-contents dark:bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#0086F526_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#0086F517_301.88deg,transparent_1turn)]"></div>
   </Transition>
   <div className="mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
    <div className="md:grid-cols-0 grid px-8 lg:grid-cols-5">
     <div className="md:col-span-3">
      <h1 className="dark:color-black mx-0 mt-0 mb-0 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[49px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{config.header.title}</h1>
      <h2 className="text-center font-poppins text-[1.5rem]  font-semibold md:text-left">{config.header.subtitle}</h2>
      <p className="mt-2 text-center font-poppins text-slate-600 dark:text-slate-400  md:w-3/4 md:text-left">{config.header.description}</p>
      <div className="mt-4 flex justify-center md:block">
       <NextLink href="/#about">
        <a className="arrow animatedLink group relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold" href="#about">
         More about me
         <svg xmlns="http://www.w3.org/2000/svg" className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
          <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
         </svg>
        </a>
       </NextLink>
      </div>
     </div>
     <div className="hidden items-center motion-reduce:transition-none md:col-span-3 md:mt-7 md:-mb-7 md:flex lg:col-span-2 lg:mt-0 lg:mb-0">
      <div className="block w-full rounded-md border-[1px] border-[#3391fc]/[40%] p-4 font-poppins text-sm shadow-codeLight transition-colors motion-reduce:transition-none dark:border-white/[10%] dark:bg-[#08152b] dark:shadow-codeDark	">
       <div>
        <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
        <span className="italic">
         <span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">$</span>{" "}
         <span>
          list github --user=
          <NextLink href={`https://github.com/${config.social.github.username}`}>
           <a target="_blank">"{config.social.github.username}"</a>
          </NextLink>
         </span>
        </span>
        <br />
        <span className="leading-6">
         + <span className="font-semibold">{repositories.public_repos_data.totalCount} Open Source</span> {repositories.public_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(repositories.public_repos_data.totalDiskUsage * 1000)})
         <br />- <span className="font-semibold">{repositories.private_repos_data.totalCount} Closed Source</span> {repositories.private_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(repositories.private_repos_data.totalDiskUsage * 1000)})
        </span>
       </div>
       {config.header.code.lines.map((line, index) => (
        <div key={index}>
         <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{line.user}</span>{" "}
         <span className="italic">
          <span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">$</span> <span>{line.command}</span>
         </span>
         <br />
         <span className="leading-6">{line.response}</span>
        </div>
       ))}
       <div>
        <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
        <span className="italic">
         <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:animate-cursor after:text-[1em] after:not-italic after:content-['▌'] motion-reduce:transition-none dark:text-slate-300">$</span>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>
   <div>
    <hr className="border-1 m-[0_auto] mb-8 border-gray-200 px-8 duration-300 motion-reduce:transition-none dark:border-gray-800" />
    <div className="m-[0_auto] mb-8 grid grid-cols-3 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black/70 dark:text-white/70 md:grid-cols-4 md:gap-x-10 lg:grid-cols-4">
     <p className="font-semibold duration-200 motion-reduce:transition-none">
      <NextLink href={`https://github.com/${config.social.github.username}`}>
       <a target="_blank" className="group inline-block text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
        <svg fill="currentColor" className="mr-1 inline h-[24px] w-[24px] fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white">
         <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
        </svg>{" "}
        {user.user_stars} Total stars
       </a>
      </NextLink>
     </p>
     <p className="hidden font-semibold duration-200 motion-reduce:transition-none md:block">
      <NextLink href={`https://github.com/${config.social.github.username}`}>
       <a target="_blank" className="group inline-block text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
        <svg fill="currentColor" className="mr-1 inline h-[24px] w-[24px] fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white">
         <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
        </svg>{" "}
        {user.user_starred_repos} Starred repos
       </a>
      </NextLink>
     </p>
     <p className="font-semibold duration-200 motion-reduce:transition-none">
      <NextLink href={`https://github.com/${config.social.github.username}`}>
       <a target="_blank" className="group inline-block text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white" viewBox="0 0 16 16">
         <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
        </svg>{" "}
        {user.user_forks} Repositories forks
       </a>
      </NextLink>
     </p>
     <p className="font-semibold duration-200 motion-reduce:transition-none">
      <NextLink href={`https://github.com/${config.social.github.username}`}>
       <a target="_blank" className="group inline-block text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
        <svg height="16" viewBox="0 0 16 16" width="16" className="mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white">
         <path fillRule="evenodd" d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
        </svg>{" "}
        {user.user_followers} Github Followers
       </a>
      </NextLink>
     </p>
    </div>
   </div>
   <div className="mx-auto scroll-mt-20 text-center relative" id={"about"}>
    <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">About me.</h3>
   </div>
   <div className="relative mx-auto scroll-mt-20 before:bg-grid-[#000] dark:before:bg-grid-[#fff] before:bg-repeat-space before:bg-center before:opacity-10 before:bg-6-1/2 dark:before:opacity-5 before:gradient-mask-t-0 before:absolute before:z-[-1] before:inset-0" id={"repositories"}>
    <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Most Popular Repositories</h3>
    <div className="relative">
     <div className="xl-grid-cols-4 mb-8 grid grid-cols-1 gap-y-10 gap-x-6 px-8 pb-4 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">{repositories.most_popular_repos_data && repositories.most_popular_repos_data.map((repo) => <RepoCard {...repo} />)}</div>
     <div className="pointer-events-visible absolute inset-x-0 bottom-0 flex pt-32 pb-8 shadow-fadeSectionLight  duration-300 dark:shadow-fadeSectionDark">
      <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
       <NextLink href="/github">
        <a className="arrow animatedLink group pointer-events-auto relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold duration-200 motion-reduce:transition-none">
         See more repositories
         <svg xmlns="http://www.w3.org/2000/svg" className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
          <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
         </svg>
        </a>
       </NextLink>
      </div>
     </div>
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

 const public_repos = await client.query({
  query: gql`
   {
     user(login: \"${config.social.github.username}\") {
      repositories(
        isFork: false
        isLocked: false
        privacy: PUBLIC
        first: 100
        orderBy: {field: STARGAZERS, direction: DESC}
        ownerAffiliations: OWNER
      ) {
        totalCount
        totalDiskUsage
        edges {
          node {
            ... on Repository {
              stargazerCount
              id
              forkCount
            }
          }
        }
      }
     }
   }
   `,
 });

 const private_repos = await client.query({
  query: gql`
    {
      user(login: \"${config.social.github.username}\") {
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

 const most_popular_repos = await client.query({
  query: gql`
  {
    user(login: \"${config.social.github.username}\") {
      topRepositories(first: 6, orderBy: {field: STARGAZERS, direction: DESC}) {
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
              stargazerCount
              primaryLanguage {
                name
                color
              }
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
 });
 const public_repos_data = public_repos.data.user.repositories;
 const private_repos_data = private_repos.data.user.repositories;
 const most_popular_repos_data = most_popular_repos.data.user.topRepositories.edges.map((edge) => edge.node);
 const user_followers = most_popular_repos.data.user.followers.totalCount;
 const user_starred_repos = most_popular_repos.data.user.starredRepositories.totalCount;
 const user_stars = public_repos.data.user.repositories.edges.map((edge) => edge.node.stargazerCount).reduce((a, b) => a + b, 0);
 const user_forks = public_repos.data.user.repositories.edges.map((edge) => edge.node.forkCount).reduce((a, b) => a + b, 0);
 return {
  props: {
   repositories: {
    public_repos_data,
    private_repos_data,
    most_popular_repos_data,
   },
   user: {
    user_followers,
    user_starred_repos,
    user_stars,
    user_forks,
   },
  },
  revalidate: 60,
 };
}
