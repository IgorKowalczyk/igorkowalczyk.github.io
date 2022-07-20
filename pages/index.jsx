import NextLink from "next/link";
import dynamic from "next/dynamic";
import { meta, header, contact, social, techs } from "@/config";
import { ConvertBytes } from "@lib/convertBytes";
import { ApolloClient, createHttpLink, InMemoryCache, gql } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { RepoCard } from "@components/elements/RepoCard";
import { Container } from "@components/elements/Container";
import { UsersIcon, StarIcon } from "@heroicons/react/outline";
import { Contact } from "@components/elements/Contact";
const Dots = dynamic(() => import("@components/decorations/Dots"));

export default function Main({ repositories, user }) {
 return (
  <Container title={`${meta.title} - Full-stack developer`}>
   <div className="pointer-events-none absolute left-0 -top-1/2 bottom-0 right-0 z-[-1] bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#336FEF40_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#336FEF2B_301.88deg,transparent_1turn)] blur-[160px] duration-200 will-change-contents dark:bg-[conic-gradient(from_230.29deg_at_51.63%_52.16%,#0086F526_0deg,transparent_67.5deg,transparent_198.75deg,transparent_251.25deg,#0086F517_301.88deg,transparent_1turn)]"></div>
   <div className="move-area mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
    <div className="md:grid-cols-0 grid px-8 lg:grid-cols-5">
     <div className="md:col-span-3">
      <h1 className="dark:color-black relative mx-0 mt-0 mb-0 bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-center font-poppins text-[51px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{header.title}</h1>
      <h2 className="text-center font-poppins text-[1.5rem]  font-semibold md:text-left">{header.subtitle}</h2>
      <p className="mt-2 text-center font-poppins text-slate-600 dark:text-slate-400  md:w-3/4 md:text-left">{header.description}</p>
      <div className="mt-4 flex justify-center md:block">
       <NextLink href="/#about">
        <a className="arrow link group relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold" href="#about">
         More about me
         <svg className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
          <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
         </svg>
        </a>
       </NextLink>
      </div>
     </div>
     <div className="hidden items-center motion-reduce:transition-none md:col-span-3 md:mt-7 md:-mb-7 md:flex lg:col-span-2 lg:mt-0 lg:mb-0">
      <div className="border-b-black/15 block w-full rounded-md border font-poppins text-[15px] text-sm shadow-codeLight transition-colors motion-reduce:transition-none dark:border-[1px] dark:border-white/[15%] dark:bg-[#08152b] dark:shadow-codeDark">
       <div className="w-fill border-b-dark/5 relative flex h-8 items-center gap-[6px] border-b bg-white/[0.05%] p-2 dark:border-b-white/10">
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fb5f57]"></div>
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#fdbf2d]"></div>
        <div className="h-3.5 w-3.5 cursor-no-drop rounded-full bg-[#27cb3f]"></div>
        <div className="absolute top-0 bottom-0 flex w-full items-center justify-center">
         <span className="opacity-50" aria-hidden="true">
          Console
         </span>
        </div>
       </div>
       <div className="p-4">
        <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
         →
        </span>{" "}
        <span className="font-semibold text-[#66e777]" aria-hidden="true">
         ~/{header.code.default.user}
        </span>{" "}
        <span className="italic">
         <span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300" aria-hidden="true">
          $
         </span>{" "}
         <span aria-label={`list github account ${social.github.username}`}>
          list github --user=
          <NextLink href={`https://github.com/${social.github.username}`}>
           <a target="_blank" aria-label={`See ${social.github.user} github`}>
            "{social.github.username}"
           </a>
          </NextLink>
         </span>
        </span>
        <br />
        <span className="leading-6">
         <div>
          <span aria-hidden="true"> + </span>
          <span className="font-semibold">{repositories.public_repos_data.totalCount} Open Source</span> {repositories.public_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(repositories.public_repos_data.totalDiskUsage * 1000)})
         </div>
         <div>
          <span aria-hidden="true"> - </span>
          <span className="font-semibold">{repositories.private_repos_data.totalCount} Closed Source</span> {repositories.private_repos_data.totalCount > 1 ? "repositories" : "repository"} on Github (total size: {ConvertBytes(repositories.private_repos_data.totalDiskUsage * 1000)})
         </div>
        </span>
        {header.code.lines.map((line, index) => (
         <div key={index}>
          <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
           →
          </span>{" "}
          <span className="font-semibold text-[#66e777]" aria-hidden="true">
           ~/{line.user}
          </span>{" "}
          <span className="italic">
           <span className="font-semibold text-slate-700 duration-200 motion-reduce:transition-none dark:text-slate-300">$</span> <span>{line.command}</span>
          </span>
          <div className="leading-6">{line.response}</div>
         </div>
        ))}
        <span className="font-semibold leading-6 text-[#ea4aaa]" aria-hidden="true">
         →
        </span>{" "}
        <span className="font-semibold text-[#66e777]" aria-hidden="true">
         ~/{header.code.default.user}
        </span>{" "}
        <span className="italic">
         <span className="relative font-semibold text-slate-700 duration-200 after:absolute after:top-0 after:right-[-1.5em] after:bottom-0 after:my-auto after:animate-cursor after:text-[1em] after:not-italic after:content-['▌'] motion-reduce:transition-none dark:text-slate-300" aria-hidden="true">
          $
         </span>
        </span>
       </div>
      </div>
     </div>
    </div>
   </div>

   <section id={"additional-info"}>
    <div>
     <hr className="m-[0_auto] mb-8 border-[1px] border-gray-200 px-8 duration-300 motion-reduce:transition-none dark:border-gray-800" />
     <div className="m-[0_auto] mb-8 grid grid-cols-3 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black/70 dark:text-white/70 md:grid-cols-4 md:gap-x-10 lg:grid-cols-4">
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <NextLink href={`https://github.com/${social.github.username}`}>
        <a target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
         <svg viewBox="0 0 16 16" className="-mt-[2px] mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white" aria-hidden="true" role="img">
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1" />
         </svg>{" "}
         <span>{user.user_stars} Total stars</span>
        </a>
       </NextLink>
      </p>
      <p className="hidden font-semibold duration-200 motion-reduce:transition-none md:block">
       <NextLink href={`https://github.com/${social.github.username}`}>
        <a target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
         <StarIcon className="-mt-[2px] mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 group-hover:stroke-black motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{user.user_starred_repos} Starred repos</span>
        </a>
       </NextLink>
      </p>
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <NextLink href={`https://github.com/${social.github.username}`}>
        <a target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
         <svg viewBox="0 0 32 32" className="-mt-[2px] mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white" aria-hidden="true" role="img">
          <path fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
         </svg>{" "}
         <span>{user.user_forks} Repositories forks</span>
        </a>
       </NextLink>
      </p>
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <NextLink href={`https://github.com/${social.github.username}`}>
        <a target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white">
         <UsersIcon className="-mt-[2px] mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 group-hover:stroke-black motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{user.user_followers} Github Followers</span>
        </a>
       </NextLink>
      </p>
     </div>
    </div>
   </section>

   <section id={"about"} className="scroll-mt-20 px-8">
    <div className="relative mx-auto mb-7 text-center">
     <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">About me.</h3>
    </div>
   </section>

   <section id={"repositories"} className="scroll-mt-20 px-6 lg:px-24">
    <div className="relative mx-auto before:absolute before:inset-0 before:z-[-1] before:bg-6-1/2 before:bg-center before:bg-repeat-space before:opacity-10 before:bg-grid-[#000] before:gradient-mask-t-0 dark:before:opacity-5 dark:before:bg-grid-[#fff]" id={"repositories"}>
     <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Most Popular Projects.</h3>
     <div className="relative">
      <div className="xl-grid-cols-4 mb-8 grid grid-cols-1 gap-y-10 gap-x-6 pb-4 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">{repositories.most_popular_repos_data && repositories.most_popular_repos_data.map((repo) => <RepoCard key={repo.id} {...repo} />)}</div>
      <div className="pointer-events-visible absolute inset-x-0 bottom-0 flex pt-32 pb-8 shadow-fadeSectionLight  duration-300 dark:shadow-fadeSectionDark">
       <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
        <NextLink href="/repositories">
         <a className="arrow link group pointer-events-auto relative mt-5 inline-block items-center justify-center p-2 pl-0 pr-0 pb-1 font-semibold duration-200 motion-reduce:transition-none">
          See more repositories
          <svg className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
           <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
          </svg>
         </a>
        </NextLink>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section id={"techs"} className="scroll-mt-20 px-6 lg:px-24">
    <div className="relative mx-auto mb-7 text-center">
     <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-poppins text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Technologies I use</h3>
    </div>
    <div className="mt-6 grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {techs.map((tech, index) => {
      return (
       <div key={index} className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl bg-zinc-200/[35%] px-4 py-2 font-poppins text-sm font-semibold text-blue-900 backdrop-blur-[9px] duration-200 hover:bg-zinc-200/90 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
        <div className="rounded-md">{tech.icon}</div>
        <span className="font-semibold">{tech.name}</span>
       </div>
      );
     })}
    </div>
    <p className="mt-9 text-center text-xl font-semibold">...and many others!</p>
   </section>

   <section id={"contact"}>
    <div className="h-full scroll-mt-20 px-6 py-36 pt-24 lg:px-36">
     <div>
      <h3 className="dark:color-black mb-2 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text font-poppins text-4xl font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] lg:text-5xl ">Contact me.</h3>
      <p className="py-1 text-base text-gray-600 dark:text-gray-300">Want to order a project? Or do you just want to stay in touch?</p>
     </div>
     <div className="relative">
      <span className="absolute -right-10 top-[90px] z-[-1] fill-black/40 dark:fill-white/40">
       <Dots h="107" w="134" />
      </span>
      <span className="absolute -left-7 -bottom-7 z-[-1] fill-black/40 dark:fill-white/40">
       <Dots h="70" w="134" />
      </span>
      <div className="relative mt-6 grid h-full w-full grid-cols-1 gap-6 divide-x divide-none dark:divide-none md:grid-cols-2 md:divide-gray-200 md:dark:divide-white/20">
       <div className="relative m-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b]">
        <Contact />
       </div>
       <div>
        <div className="space-y-4 p-4">
         <p className="text-xl font-semibold">Or contact me with...</p>
         {contact.links.map((element, index) => (
          <NextLink href={element.href} key={index}>
           <a className="group mt-2 ml-auto flex w-full rounded-md border border-transparent bg-blue-100 px-4 py-2 font-poppins text-sm font-semibold text-blue-900 backdrop-blur-[9px] duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
            {element.icon} {element.title}
           </a>
          </NextLink>
         ))}
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
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
     user(login: \"${social.github.username}\") {
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

 const most_popular_repos = await client.query({
  query: gql`
  {
    user(login: \"${social.github.username}\") {
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
