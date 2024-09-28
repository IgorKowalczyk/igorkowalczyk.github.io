import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icons";
import { ButtonSecondary, ButtonPrimary } from "@/components/Button";
import { parseISO } from "@/lib/utils";
import { type Project } from "@/config";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div key={project.name} className="mb-16 overflow-hidden duration-200 motion-reduce:transition-none">
      <h3 className="mb-2 text-2xl font-bold tracking-[-0.03em]">{project.name}</h3>
      {project.started && (
        <time className="my-2 block text-sm font-normal leading-none text-gray-500 dark:text-neutral-500" dateTime={new Date(project.started).toUTCString()}>
          {parseISO(project.started)} - {project.ended ? parseISO(project.ended) : "Now"}
        </time>
      )}
      <p className="mb-4 mt-2 text-gray-700 dark:text-neutral-400 md:w-3/4">{project.description}</p>
      {project.images &&
        project.images.length > 0 &&
        project.images.map((image) => (
          <Link key={`project-image-${image.alt}-${image.height}`} href={image.src} target="_blank" rel="noopener noreferrer">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="aspect-video cursor-zoom-in rounded-xl border border-black/[15%] duration-200 hover:opacity-70 dark:border-neutral-800" />
          </Link>
        ))}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <div key={`project-tech-${tech.name}`} className="flex cursor-pointer items-center gap-2 rounded-md border border-black/[15%] px-2 py-1 font-mono text-sm font-medium text-gray-800/[60%] duration-200 hover:bg-black/[5%] motion-reduce:transition-none dark:border-neutral-800 dark:text-white/[50%] dark:hover:border-neutral-700 dark:hover:bg-white/[5%]">
            <Image src={tech.icon} alt={tech.name} width={20} height={20} className="size-5" /> {tech.name}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.website && (
          <ButtonPrimary href={project.website} rel="noopener noreferrer">
            <Icons.Link className="mr-2 size-5 stroke-2" />
            Visit website
          </ButtonPrimary>
        )}
        {project.github && (
          <ButtonSecondary href={project.github} rel="noopener noreferrer">
            <Icons.Github className="mr-2 size-5 fill-neutral-700 dark:fill-white" />
            View on Github
          </ButtonSecondary>
        )}
      </div>
    </div>
  );
}