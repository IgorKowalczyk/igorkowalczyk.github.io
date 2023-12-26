import { StarIcon, FolderIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export function RepositoryCard({ name, id, owner, description, url, homepageUrl, repositoryTopics, stargazerCount, forkCount, primaryLanguage, className }) {
 return (
  <div id={name} className={clsx("overflow-hidden rounded-xl border-[1px] border-black/15 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]", className)}>
   <Image unoptimized={true} src={`/api/og/repository/${owner.login}/${name}`} alt={`Preview of ${name}`} width={720} height={480} />
   <div className="p-5 text-left">
    <Link href={url} key={id} className="break-all text-left font-semibold" target="_blank">
     <FolderIcon className="inline h-6 w-6 fill-black/10 stroke-black/70 duration-200 motion-reduce:transition-none dark:fill-white/10 dark:stroke-white/70" /> {owner.login}/{name}
    </Link>
    <p className="my-2 text-left">{description && description.length > 90 ? `${description.substring(0, 90)}...` : description}</p>
    {repositoryTopics && (
     <div className="mb-1 flex flex-wrap gap-2 text-left font-mono">
      {repositoryTopics.edges.slice(0, 3).map((topic) => (
       <Link key={topic.node.topic.name} href={`https://github.com/topics/${topic.node.topic.name}`} target="_blank">
        <span className="rounded-[2em] border-[1px] border-black/15 px-[0.5em] py-[0.12em] text-[88%] text-gray-800/60 duration-200 hover:bg-black/5 motion-reduce:transition-none dark:border-neutral-800 dark:text-white/50 dark:hover:border-neutral-700 dark:hover:bg-white/5">#{topic.node.topic.name}</span>
       </Link>
      ))}
     </div>
    )}
    <div className="flex flex-wrap gap-1">
     <Link key="repo_lang" href={`${url}/search?l=${primaryLanguage ? primaryLanguage.name : "Markdown"}`} target="_blank" aria-label={`${primaryLanguage ? primaryLanguage.name : "Markdown"} search`} className="my-1 flex w-max content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20">
      <span
       className="mr-1 block h-[12px] w-[12px] rounded-full bg-gray-400 dark:bg-white"
       style={{
        backgroundColor: primaryLanguage ? primaryLanguage.color : "",
       }}
      />{" "}
      {primaryLanguage ? primaryLanguage.name : "Markdown"}
     </Link>
     <Link key="repo_stars" href={`${url}/stargazers`} target="_blank" className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20">
      <StarIcon className="mr-1 inline h-5 w-5 stroke-black/50 duration-200 motion-reduce:transition-none dark:stroke-white/70 dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{stargazerCount} Stars</span>
     </Link>
     <Link key="repo_forks" href={`${url}/network/members`} target="_blank" className="my-1 flex w-max snap-center snap-always content-center items-center rounded-lg border-2 border-transparent bg-black/5 px-[0.5em] py-[0.12em] align-middle text-[88%] text-gray-800/60 duration-200 hover:bg-black/10 motion-reduce:transition-none dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20">
      <svg className="mr-1 h-5 w-5 fill-black/50 duration-200 motion-reduce:transition-none dark:fill-white/70" aria-hidden="true" role="img" viewBox="0 0 32 32">
       <path fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
      </svg>{" "}
      {forkCount} Forks
     </Link>
    </div>
    <div className="mt-2 flex flex-wrap gap-2">
     {homepageUrl && (
      <Button href={homepageUrl} target="_blank" className="mt-2" aria-label="View homepage">
       View project
      </Button>
     )}
     {url && (
      <Button href={url} target="_blank" className="mt-2" aria-label="View on GitHub">
       GitHub
      </Button>
     )}
    </div>
   </div>
  </div>
 );
}
