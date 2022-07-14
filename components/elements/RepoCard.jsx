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
    {repo.description ? repo.description.substring(0, 90) : "No description"}
    {repo.description && repo.description.length > 90 ? "..." : ""}
   </p>
   {repo.repositoryTopics ? (
    <div className="text-left">
     {repo.repositoryTopics.edges.map((topic) => (
      <NextLink key={topic.node.topic.name} href={`https://github.com/topics/${topic.node.topic.name}`}>
       <a target="_blank">
        <span className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:text-white/[50%]">#{topic.node.topic.name}</span>
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
       <span className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white" style={{ backgroundColor: repo.primaryLanguage ? repo.primaryLanguage.color : "" }}></span> <span>{repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}</span>
      </span>
     </a>
    </NextLink>
    <NextLink key="repo_stars" href={`${repo.url}/stargazers`}>
     <a target="_blank">
      <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
       <StarIcon className="mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{repo.stargazerCount} Stars</span>
      </span>
     </a>
    </NextLink>
    <NextLink key="repo_forks" href={`${repo.url}/network/members`}>
     <a target="_blank">
      <span className="flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] py-[0.12em] px-[0.5em] align-middle text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%]">
       <svg className="mr-1 h-5 w-5 fill-black/[50%] duration-200 motion-reduce:transition-none dark:fill-white/[70%]" aria-hidden="true" role="img" viewBox="0 0 32 32">
        <path fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
       </svg>{" "}
       <span>{repo.forkCount} Forks</span>
      </span>
     </a>
    </NextLink>
   </div>
  </div>
 );
}

export function RepoCardSkeleton() {
 return (
  <div className="rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 duration-200 hover:scale-105 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100 dark:border-white/[15%] dark:bg-[#08152b]">
   <div className="h-6 w-2/4 animate-pulse rounded-md bg-zinc-200/[15%]" />
   <div className="mt-3 h-6 w-5/6 animate-pulse rounded-md bg-zinc-200/[15%]" />
   <div className="mt-3 flex text-left">
    {Array.from({ length: 3 }).map((_, index) => (
     <div className="mr-2 h-6 w-28 animate-pulse rounded-[2em] bg-zinc-200/[15%]" key={index} />
    ))}
   </div>
   <div className=" mt-2 flex gap-1">
    {Array.from({ length: 3 }).map((_, index) => (
     <div className="mr-2 h-6 w-28 animate-pulse rounded-md bg-zinc-200/[15%]" key={index} />
    ))}
   </div>
  </div>
 );
}
