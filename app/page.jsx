import { UsersIcon, StarIcon } from "@heroicons/react/24/outline";
import sparkles from "/public/assets/svg/sparkles.svg";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Contact } from "@/components/client/Contact";
import { GlowEffect } from "@/components/client/GlowEffect";
import { Dots } from "@/components/Decorations";
import { Description, Header2 } from "@/components/Headers";
import { ProjectCard } from "@/components/ProjectCard";
import { Terminal } from "@/components/Terminal";
import { projects } from "@/config";
import { header, contact, meta, technologies } from "@/config";
import { GetUserData, getTotalContributionsForYears } from "@/lib/graphql";
import { ConvertNumber } from "@/lib/utils";

export const runtime = "edge";

export const metadata = {
 title: "Igor Kowalczyk",
};

export default async function HomePage() {
 const userData = await GetUserData();
 const contributions = await getTotalContributionsForYears();

 return (
  <>
   <div className="bg-cover bg-fixed bg-right before:absolute before:inset-0 before:z-[-1] before:bg-[length:30px_30px] before:bg-center before:opacity-5 before:bg-grid-[#000] dark:before:bg-grid-[#fff]">
    <div className="pointer-events-none absolute -top-1/2 bottom-0 left-0 right-0 z-[-1] bg-main-gradient bg-contain blur-[160px] will-change-contents" />
    <div className="move-area mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
     <div className="md:grid-cols-0 grid lg:grid-cols-5">
      <div className="md:col-span-3">
       <h1 className="dark:color-black relative mx-0 mb-0 mt-0 text-center text-[51px] font-black tracking-[-0.03em] text-gray-800 duration-300 dark:text-white md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{header.title}</h1>
       <h2 className="text-center text-[1.5rem] font-semibold opacity-80 md:text-left">{header.subtitle}</h2>
       <p className="mt-2 text-center text-gray-700 dark:text-neutral-400 md:w-3/4 md:text-left">{header.description}</p>
       <div className="mt-4 flex justify-center md:block">
        <Link href="/#about" className="arrow link group relative mt-5 inline-block items-center justify-center p-2 pb-1 pl-0 pr-0 font-semibold">
         <>
          More about me
          <svg className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
           <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
          </svg>
         </>
        </Link>
       </div>
      </div>

      <div className="hidden items-center motion-reduce:transition-none md:col-span-3 md:-mb-7 md:mt-7 md:flex lg:col-span-2 lg:mb-0 lg:mt-0">
       <GlowEffect className="z-10 block w-full">
        <Terminal userData={userData} contributions={contributions} />
       </GlowEffect>
      </div>
     </div>
    </div>
   </div>

   <section id="additional-info">
    <hr className="mx-auto mb-8 h-px w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] px-8 duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
    <div className="mx-auto mb-8 flex flex-wrap justify-around gap-4 px-8 text-center text-gray-800/70 dark:text-white/70 md:gap-8">
     <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center justify-center gap-2 text-center font-semibold duration-200 hover:text-gray-800 motion-reduce:transition-none dark:hover:text-white">
      <>
       <StarIcon className="-mt-[2px] h-5 w-5 stroke-2" aria-hidden="true" role="img" /> <span>{userData && ConvertNumber(userData.userStars)} Stars on repositories</span>
      </>
     </Link>

     <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center justify-center gap-2 text-center font-semibold duration-200 hover:text-gray-800 motion-reduce:transition-none dark:hover:text-white">
      <>
       <svg className="h-5 w-5 stroke-2" aria-hidden="true" strokeWidth="1.5" viewBox="0 0 16 16" role="img">
        <path strokeLinejoin="round" fill="currentColor" fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z" />
       </svg>
       <span>{userData && ConvertNumber(contributions.total)} Commits</span>
      </>
     </Link>

     <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center justify-center gap-2 text-center font-semibold duration-200 hover:text-gray-800 motion-reduce:transition-none dark:hover:text-white">
      <>
       <svg className="-mt-[2px] h-5 w-5 stroke-2" aria-hidden="true" strokeWidth="1.5" viewBox="0 0 32 32" role="img">
        <path strokeLinejoin="round" strokeLinecap="round" fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
       </svg>{" "}
       <span>{userData && ConvertNumber(userData.userForks)} Repositories forks</span>
      </>
     </Link>

     <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}?tab=followers`} className="flex items-center justify-center gap-2 text-center font-semibold duration-200 hover:text-gray-800 motion-reduce:transition-none dark:hover:text-white">
      <>
       <UsersIcon className="-mt-[2px] h-5 w-5 stroke-2" aria-hidden="true" role="img" /> <span>{userData && ConvertNumber(userData.userFollowers)} Github Followers</span>
      </>
     </Link>
    </div>
   </section>

   <section className="relative my-6 w-full text-center">
    <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-neutral-800">
     <Dots h="107" w="134" />
    </span>
    <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-neutral-800">
     <Dots h="70" w="134" />
    </span>
    <Image src={sparkles} alt="sparkles" width="auto" height="auto" className="hide pointer-events-none mx-auto animate-pulse" />
    <Header2 id="about" className="!my-6 text-center text-4xl">
     About me
    </Header2>

    <div className="prose m-auto px-6 text-center dark:prose-dark">
     <span>I have been coding for more than 5 years. I started my journey at the end of 2018.</span>
     <span>At first, I learned HTML, CSS and base Javascript to build websites</span>
     <span>
      {" "}
      My first project was a simple music player made with Javascript (~January 2019).
      <br />
     </span>
     <span> In March 2020, I started learning Node.js & Express.js, I also created my first major project - Majo.exe.</span>
     <span> In April 2022, I started learning React.js, Next.js and Tailwind.css</span>
    </div>
   </section>

   <section className="relative mx-auto max-w-5xl">
    <Header2 id="projects" className="!my-6 text-center text-4xl">
     Recent Projects
    </Header2>
    {projects.slice(0, 2).map((project, index) => (
     <ProjectCard key={index} project={project} />
    ))}
    <div className="pointer-events-visible section-fade absolute inset-x-0 bottom-0 z-20 flex pb-8 pt-32 duration-300">
     <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
      <Link href="/work" className="arrow link group pointer-events-auto relative mt-5 inline-block items-center justify-center p-2 pb-1 pl-0 pr-0 font-semibold duration-200 motion-reduce:transition-none">
       <>
        See more projects
        <svg className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" />
         <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round" />
        </svg>
       </>
      </Link>
     </div>
    </div>
   </section>

   <section className="relative my-6 w-full text-center">
    <div className="relative mx-auto mb-7 text-center">
     <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-neutral-800">
      <Dots h="107" w="134" />
     </span>
     <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-neutral-800">
      <Dots h="70" w="134" />
     </span>

     <Image src={sparkles} alt="sparkles" width="auto" height="auto" className="hide pointer-events-none mx-auto animate-pulse" />

     <Header2 id="tech" className="!my-6 text-center text-4xl">
      Technologies I use
     </Header2>
    </div>
    <div className="mx-auto mt-6 grid h-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
     {technologies.map((tech, index) => {
      return (
       <div key={index}>
        {tech.link ? (
         <Link href={tech.link} target="_blank" className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
          <Image className={clsx(tech.class, "h-8 w-8 rounded-md")} loading="lazy" width={32} height={32} src={tech.icon} alt={tech.name} />
          <span className="font-semibold">{tech.name}</span>
         </Link>
        ) : (
         <div key={index} className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
          <Image className={clsx(tech.class, "h-8 w-8 rounded-md")} loading="lazy" width={32} height={32} src={tech.icon} alt={tech.name} />
          <span className="font-semibold">{tech.name}</span>
         </div>
        )}
       </div>
      );
     })}
    </div>
    <p className="mt-9 text-center text-xl font-semibold ">...and many others!</p>
   </section>

   <section className="mb-12">
    <Image src={sparkles} alt="sparkles" width="auto" height="auto" className="hide pointer-events-none mx-auto animate-pulse" />
    <Header2 id="contact" className="mt-6 text-center text-4xl">
     Contact me
    </Header2>
    <Description className="text-center">I'm always open to new opportunities and projects.</Description>
    <div className="relative">
     <div className="relative mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
      <div className="relative mx-auto mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/15 bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
       <Contact />
      </div>
      <div className="space-y-4 p-4">
       <p className=" text-xl font-semibold">Or contact me with...</p>
       {contact.links.map((element, index) => (
        <Link href={element.href} key={index} target="_blank" className="group ml-auto mt-2 flex h-12 w-full items-center gap-3 rounded-md border bg-[#f8f9fa] px-4 py-2 text-sm font-semibold text-blue-900 duration-200 hover:bg-[#f2f3f5] motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
         <>
          {element.icon} {element.title}
         </>
        </Link>
       ))}
      </div>
     </div>
     <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-neutral-800">
      <Dots h="107" w="134" />
     </span>
     <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-neutral-800">
      <Dots h="70" w="134" />
     </span>
    </div>
   </section>
  </>
 );
}
