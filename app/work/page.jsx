import clsx from "clsx";
import Button from "components/Button";
import { Squares } from "components/Decorations";
import { Header1, Header2 } from "components/Headers";
import { RepositoryCard } from "components/RepositoryCard";
import { GetRepos } from "lib/graphql";
import Image from "next/image";
import Link from "next/link";
import { projects } from "config";
import { parseISO } from "/lib/utils";

export const runtime = "edge";

export const metadata = {
 title: "My Work",
};

export default async function GithubRepositories() {
 const { user } = await GetRepos("public", 50);
 const repositories = user.repositories.edges.map((edge) => edge.node);
 repositories.sort((a, b) => b.stars - a.stars || a.isArchived - b.isArchived);

 return (
  <>
   <div className="fixed right-full top-full z-[-1] -translate-y-1/4 translate-x-1/2 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>

   <div className="mx-auto mb-16 flex max-w-5xl flex-col items-start justify-center">
    <Header1>My Work</Header1>
    <p className="mb-6 text-gray-700 dark:text-neutral-300">I have been programming for {new Date().getFullYear() - 2018} years, and I have worked on many projects. Here are some of my most recent projects, you can find more on my Github profile.</p>

    <Header2 className="mb-3">Recent Projects</Header2>

    {projects.map((project, index) => (
     <div key={index} className="mx-auto mb-6 flex flex-col gap-8 overflow-hidden rounded-xl border-[1px] border-black/15 p-8 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none md:flex-row dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
      <div className="min-w-[50%]">
       <h3 className="text-left text-3xl font-black">{project.name}</h3>
       {project.started && (
        <time className="my-2 block text-sm font-normal leading-none text-gray-500 dark:text-neutral-500" dateTime={new Date(project.started).toUTCString()}>
         {parseISO(project.started)} - {project.ended ? parseISO(project.ended) : "Now"}
        </time>
       )}
       <p className="mt-2 text-left text-gray-700 md:w-3/4 dark:text-neutral-400">{project.description}</p>
       <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
         <div key={index} className="flex cursor-pointer items-center gap-2 rounded-md border border-black/[15%] px-2 py-1 font-mono text-sm font-medium text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:border-neutral-700 dark:hover:bg-white/[5%]">
          <Image src={tech.icon} alt={tech.name} width={20} height={20} className="h-5 w-5" /> {tech.name}
         </div>
        ))}
       </div>
       <div className="mt-4 flex flex-wrap gap-2">
        {project.website && (
         <Button href={project.website} className="mt-4" target="_blank" rel="noopener noreferrer">
          Visit Website
         </Button>
        )}
        {project.github && (
         <Button href={project.github} className="mt-4" target="_blank" rel="noopener noreferrer">
          View on Github
         </Button>
        )}
       </div>
      </div>
      {project.images && project.images.length > 0 && (
       <div
        className={clsx({
         "columns-1": project.images.length < 2,
         "columns-2": project.images.length >= 2,
        })}
       >
        {project.images.map((image, index) => (
         <Link key={index} href={image.src} target="_blank" rel="noopener noreferrer">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="cursor-pointer rounded-xl border-[1px] border-black/[15%] duration-200 hover:scale-105 hover:opacity-90 dark:border-neutral-800" />
         </Link>
        ))}
       </div>
      )}
     </div>
    ))}

    <Header2 className="mt-6">Github Repositories</Header2>
    {repositories && (
     <div className="mt-3 columns-2 gap-6 text-center text-gray-800 dark:text-white">
      {repositories?.map((repo) => (
       <RepositoryCard key={repo.id} {...repo} className="mb-6" />
      ))}
     </div>
    )}
   </div>
  </>
 );
}
