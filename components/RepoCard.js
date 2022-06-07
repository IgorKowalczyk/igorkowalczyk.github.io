import NextLink from "next/link";
import { SparklesIcon, StarIcon, ArchiveIcon, FolderIcon } from "@heroicons/react/outline";
export function RepoCard(repo) {
 return (
  <div className="rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 duration-200 hover:scale-105 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100 dark:border-white/[15%] dark:bg-[#08152b]">
   <div className="text-left">
    <NextLink href={repo.url} key={repo.id}>
     <a className="break-all text-left font-poppins font-semibold" target="_blank">
      <FolderIcon className="inline h-6 w-6 fill-black/[10%] stroke-black/[70%] duration-200 motion-reduce:transition-none dark:fill-white/[10%] dark:stroke-white/[70%]" /> {repo.owner.login}/{repo.name}
     </a>
    </NextLink>
    {"  "}
    <span className="inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[55%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">
     {repo.isArchived ? (
      <>
       <ArchiveIcon className="inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" /> Archived
      </>
     ) : (
      <>
       <SparklesIcon className="inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" /> Active
      </>
     )}
    </span>
   </div>
   <p className="text-left">
    {repo.description.substring(0, 90)}
    {repo.description.length > 90 ? "..." : ""}
   </p>
   {repo.repositoryTopics ? (
    <div className="text-left">
     {repo.repositoryTopics.edges.map((topic) => (
      <NextLink key={topic.node.topic.name} href={`https://github.com/topics/${topic.node.topic.name}`}>
       <a target="_blank">
        <span className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">{topic.node.topic.name}</span>
       </a>
      </NextLink>
     ))}
    </div>
   ) : (
    ""
   )}
   <div className="hide-scrollbar mt-2 flex gap-1 overflow-hidden overflow-x-auto">
    <NextLink key="repo_lang" href={`${repo.url}/search?l=${repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}`}>
     <a target="_blank" aria-label={`${repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"} search`}>
      <span className="flex w-max content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
       <span className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white" style={{ backgroundColor: repo.primaryLanguage ? repo.primaryLanguage.color : "" }}></span> {repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}
      </span>
     </a>
    </NextLink>
    <NextLink key="repo_stars" href={`${repo.url}/stargazers`}>
     <a target="_blank">
      <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
       <StarIcon className="mr-1 h-5 w-5 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" /> {repo.stargazerCount} Stars
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
 );
}
