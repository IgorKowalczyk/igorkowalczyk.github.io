import { SparklesIcon, StarIcon, ArchiveBoxIcon, FolderIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export function RepoCard(repo) {
 return (
  <div id={repo.name} className="card z-10 rounded-[10px] border-[1px] border-black/[15%] bg-zinc-200/[25%] p-5 backdrop-blur-md duration-200 ease-in-out hover:bg-zinc-200/60 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
   <div>
    <Image unoptimized src={`/api/og/repository/${repo.owner.login}/${repo.name}`} width={1200} height={630} alt={`Preview of ${repo.name}`} className="mb-4 rounded-[10px]" />
    <div className="text-left">
     <Link href={repo.url} key={repo.id} className="break-all text-left  font-semibold" target="_blank">
      <FolderIcon className="inline h-6 w-6 fill-black/[10%] stroke-black/[70%] duration-200 motion-reduce:transition-none dark:fill-white/[10%] dark:stroke-white/[70%]" /> {repo.owner.login}/{repo.name}
     </Link>
     {"  "}
     <span className="ml-1 inline-flex content-center items-center rounded-lg border-[1px] border-black/[15%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-zinc-800/[55%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:bg-white/[5%]">
      {repo.isArchived ? (
       <>
        <ArchiveBoxIcon className="mr-1 inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" /> Archived
       </>
      ) : (
       <>
        <SparklesIcon className="mr-1 inline-block h-4 w-4 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[50%]" /> Active
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
       <Link key={topic.node.topic.name} href={`https://github.com/topics/${topic.node.topic.name}`} target="_blank">
        <span className="mr-[10px] mt-1 inline-flex content-center items-center rounded-[2em] border-[1px] border-black/[15%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-zinc-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:bg-white/[5%]">#{topic.node.topic.name}</span>
       </Link>
      ))}
     </div>
    ) : (
     ""
    )}
    <div className="hide-scrollbar flex gap-1 overflow-hidden overflow-x-auto">
     <Link key="repo_lang" href={`${repo.url}/search?l=${repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}`} target="_blank" aria-label={`${repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"} search`}>
      <span className="my-1 flex w-max content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] text-[88%] text-zinc-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
       <span
        className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white"
        style={{
         backgroundColor: repo.primaryLanguage ? repo.primaryLanguage.color : "",
        }}
       ></span>{" "}
       <span>{repo.primaryLanguage ? repo.primaryLanguage.name : "Markdown"}</span>
      </span>
     </Link>
     <Link key="repo_stars" href={`${repo.url}/stargazers`} target="_blank">
      <span className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-zinc-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
       <StarIcon className="mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{repo.stargazerCount} Stars</span>
      </span>
     </Link>
     <Link key="repo_forks" href={`${repo.url}/network/members`} target="_blank">
      <span className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/[5%] px-[0.5em] py-[0.12em] align-middle text-[88%] text-zinc-800/[60%] duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/[70%] dark:hover:bg-white/20">
       <svg className="mr-1 h-5 w-5 fill-black/[50%] duration-200 motion-reduce:transition-none dark:fill-white/[70%]" aria-hidden="true" role="img" viewBox="0 0 32 32">
        <path fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
       </svg>{" "}
       <span>{repo.forkCount} Forks</span>
      </span>
     </Link>
    </div>
   </div>
  </div>
 );
}

export function RepoCardSkeleton() {
 return (
  <div className="rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 duration-200 hover:shadow-xl motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
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
