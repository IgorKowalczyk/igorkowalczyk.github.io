import NextLink from "next/link";
import dynamic from "next/dynamic";
import { config } from "@/config";
import { ConvertBytes } from "@lib/convertBytes";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Container } from "@components/elements/Container";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { RepoCard } from "@components/elements/RepoCard";
import { UsersIcon } from "@heroicons/react/outline";
const Dots = dynamic(() => import("@components/decorations/Dots"));
const Tippy = dynamic(() => import("@tippyjs/react"));

export default function Main({ repositories, user }) {
 const [isMouted, setMouted] = useState(false);
 useEffect(() => {
  setTimeout(() => {
   setMouted(true), [];
  }, 300);
 });

 return (
  <Container title={`${config.title} - Full-stack developer`}>
   <Transition show={isMouted} enter="duration-200 ease-out" enterFrom="opacity-0" enterTo="opacity-100" leave="duration-200 ease-out" leaveFrom="opacity-100" leaveTo="opacity-0 duration-200">
    <div className="pointer-events-none absolute left-0 -top-1/2 bottom-0 right-0 z-[-1] bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#336FEF40_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#336FEF2B_301.88deg,transparent_1turn)] blur-[160px] duration-200 will-change-contents dark:bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#0086F526_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#0086F517_301.88deg,transparent_1turn)]"></div>
   </Transition>
   <div className="move-area mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
    <div className="md:grid-cols-0 grid px-8 lg:grid-cols-5">
     <div className="md:col-span-3">
      <h1 className="dark:color-black mx-0 mt-0 mb-0 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[51px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{config.header.title}</h1>
      <h2 className="text-center font-poppins text-[1.5rem]  font-semibold md:text-left">{config.header.subtitle}</h2>
      <p className="mt-2 text-center font-poppins text-slate-600 dark:text-slate-400  md:w-3/4 md:text-left">{config.header.description}</p>
      <div className="mt-4 flex justify-center md:block">
       <NextLink href="/#about">
        <a className="arrow link group relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold" href="#about">
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
      <div className="border-b-black/15 block w-full rounded-md border font-poppins text-[15px] text-sm shadow-codeLight transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-white/[15%] dark:bg-[#08152b] dark:shadow-codeDark">
       <div className="w-fill border-b-dark/5 flex h-8 gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]"></div>
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]"></div>
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]"></div>
       </div>
       <div className="p-4">
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
    <hr className="m-[0_auto] mb-8 border-[1px] border-gray-200 px-8 duration-300 motion-reduce:transition-none dark:border-gray-800" />
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
        <UsersIcon className="mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 group-hover:stroke-black motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" /> {user.user_followers} Github Followers
       </a>
      </NextLink>
     </p>
    </div>
   </div>
   <div className="relative mx-auto mb-7 scroll-mt-20 text-center" id={"about"}>
    <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">About me.</h3>
   </div>
   <div className="relative mx-auto scroll-mt-20 before:absolute before:inset-0 before:z-[-1] before:bg-6-1/2 before:bg-center before:bg-repeat-space before:opacity-10 before:bg-grid-[#000] before:gradient-mask-t-0 dark:before:opacity-5 dark:before:bg-grid-[#fff]" id={"repositories"}>
    <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Most Popular Projects.</h3>
    <div className="relative">
     <div className="xl-grid-cols-4 mb-8 grid grid-cols-1 gap-y-10 gap-x-6 px-8 pb-4 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">{repositories.most_popular_repos_data && repositories.most_popular_repos_data.map((repo) => <RepoCard key={repo.id} {...repo} />)}</div>
     <div className="pointer-events-visible absolute inset-x-0 bottom-0 flex pt-32 pb-8 shadow-fadeSectionLight  duration-300 dark:shadow-fadeSectionDark">
      <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
       <NextLink href="/work">
        <a className="arrow link group pointer-events-auto relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold duration-200 motion-reduce:transition-none">
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
   <div className="relative mx-auto mb-7 scroll-mt-20 text-center" id={"contact"}>
    <h3 className="dark:color-black mx-6 mb-2 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Contact me.</h3>
    <p className="py-1 text-base text-gray-600 dark:text-gray-300">Want to order a project? Or do you just want to stay in touch?</p>
    <div className="relative m-[0_auto] my-4 w-9/12 max-w-screen-sm rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b]">
     <form className="flex w-full flex-col items-center justify-center p-4">
      <div className="block w-full items-center justify-center gap-1.5 text-left md:flex">
       <label htmlFor="contact_name" className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
        Name
        <Tippy content="Required" theme="translucent" placement="right" className="-ml-1">
         <span aria-hidden={true} className="cursor-help text-red-500">
          *
         </span>
        </Tippy>
        <input id="contact_name" className="my-2 w-full rounded-lg border-[1px] border-gray-300  p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="text" placeholder="John Doe" />
       </label>
       <label htmlFor="contact_email" className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
        Email
        <Tippy content="Required" theme="translucent" placement="right" className="-ml-1">
         <span aria-hidden={true} className="cursor-help text-red-500">
          *
         </span>
        </Tippy>
        <input id="contact_email" className="my-2 w-full rounded-lg border-[1px] border-gray-300  p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="email" placeholder="john@doe.com" />
       </label>
      </div>
      <div className="\mt-2 flex w-full items-center justify-center gap-1.5">
       <label htmlFor="contact_message" className="w-full text-left text-sm font-semibold tracking-wide text-gray-600 dark:text-gray-400">
        Message
        <Tippy content="Required" theme="translucent" placement="right" className="-ml-1">
         <span aria-hidden={true} className="cursor-help text-red-500">
          *
         </span>
        </Tippy>
        <textarea id="contact_message" className="my-2 max-h-40 min-h-[80px] w-full rounded-lg border-[1px] border-gray-300 p-2 text-black outline-none duration-200 focus:border-blue-700 dark:border-white/20 dark:bg-transparent  dark:text-white focus:dark:border-blue-500 " type="email" placeholder="Hello there!" />
       </label>
      </div>
      <button type="button" className="group mt-2 ml-auto flex rounded-md border border-transparent bg-blue-100 px-4 py-2 font-poppins text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" onClick={() => setIsOpen(false)}>
       Send{" "}
       <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
       </svg>
      </button>
     </form>
     <span className="absolute -right-10 top-[90px] z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="107" w="134" />
     </span>
     <span className="absolute -left-7 -bottom-7 z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="70" w="134" />
     </span>
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

/* 
    <div className="flex justify-center ">
     <div className="m-[0_auto] flex w-[90%] max-w-4xl flex-col-reverse items-center justify-center sm:flex-row">
      <div className="sm:max-w-48 relative m-[0_auto] w-full px-8 pt-5 drop-shadow-2xl sm:m-0 sm:w-max sm:px-0">
       <div className="m-[0_auto] items-center motion-reduce:transition-none md:m-0 md:flex">
        <div className="border-b-black/15 block w-full rounded-md border font-poppins text-[15px] text-sm shadow-codeLight transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-white/[15%] dark:bg-[#08152b] dark:shadow-codeDark">
         <div className="w-fill border-b-dark/5 flex h-8 gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
          <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]"></div>
          <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]"></div>
          <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]"></div>
         </div>
         <div className="p-4 text-left">
           <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
           <span className="italic">
            <span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">$</span>{" "}
           </span>
           <span>soon</span>
           <br/>
           <span className="font-semibold leading-6 text-[#ea4aaa]">→</span> <span className="font-semibold text-[#66e777]">~/{config.header.code.default.user}</span>{" "}
           <span className="italic">
            <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:animate-cursor after:text-[1em] after:not-italic after:content-['▌'] motion-reduce:transition-none dark:text-slate-300">$</span>
           </span>
         </div>
        </div>
       </div>
      </div>
      <div className="flex flex-col pl-8">
       <p className="text-gray-600 dark:text-gray-400"></p>
      </div>
     </div>
    </div>
    */
