import clsx from "clsx";
import { parseISO } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export function ProjectCard({ project }) {
 return (
  <div key={project.name} className="mx-auto mb-6 flex flex-col gap-8 overflow-hidden rounded-xl border-[1px] border-black/15 p-8 duration-200 ease-in-out hover:bg-gray-200/50 motion-reduce:transition-none md:flex-row dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
   <div className="min-w-[50%]">
    <h3 className="text-left text-3xl font-semibold">{project.name}</h3>
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
       <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="cursor-zoom-in rounded-xl border-[1px] border-black/[15%] duration-200 hover:opacity-70 dark:border-neutral-800" />
      </Link>
     ))}
    </div>
   )}
  </div>
 );
}
