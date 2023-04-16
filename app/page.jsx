import { header, contact, meta, technologies } from "/config";
import { ConvertNumber } from "/lib/utils";
import { UsersIcon, StarIcon } from "@heroicons/react/24/outline";
import sparkles from "/public/assets/svg/sparkles.svg";
import Dots from "components/decorations/Dots";
import { CodeCard } from "components/elements/CodeCard";
import { Contact } from "components/elements/Contact";
import { GlowEffect } from "components/elements/GlowEffect";
import { RepoCard } from "components/elements/RepoCard";
import { GetUserData, GetPopular, getTotalContributionsForYears } from "lib/graphQl";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export const metadata = {
 title: "Igor Kowalczyk",
};

export default async function HomePage() {
 const repos = await GetPopular();
 const reposData = repos.repositories.edges;
 const userData = await GetUserData();
 const contributions = await getTotalContributionsForYears();

 return (
  <div id="cards">
   <div className="bg-cover bg-fixed bg-right">
    <div className="pointer-events-none absolute -top-1/2 bottom-0 left-0 right-0 z-[-1] bg-main-gradient bg-contain blur-[160px] will-change-contents"></div>
    <div className="move-area mx-auto -mt-24 flex min-h-screen flex-1 flex-col justify-center duration-300 motion-reduce:transition-none md:w-[90%] xl:w-4/5">
     <div className="md:grid-cols-0 grid lg:grid-cols-5">
      <div className="md:col-span-3">
       <h1 className="dark:color-black relative mx-0 mb-0 mt-0 bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-center font-inter text-[51px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff] md:text-left md:text-[55px] lg:text-[67px] xl:text-[75px]">{header.title}</h1>
       <h2 className="text-center font-inter text-[1.5rem] font-semibold md:text-left">{header.subtitle}</h2>
       <p className="mt-2 text-center font-inter text-slate-600 dark:text-slate-400  md:w-3/4 md:text-left">{header.description}</p>
       <div className="mt-4 flex justify-center md:block">
        <Link href="/#about" className="arrow link group relative mt-5 inline-block items-center justify-center p-2 pb-1 pl-0 pr-0 font-inter font-semibold">
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
       <GlowEffect className="block w-full">
        <CodeCard userData={userData} contributions={contributions} />
       </GlowEffect>
      </div>
     </div>
    </div>
   </div>

   <section id={"additional-info"}>
    <div>
     <hr className="m-[0_auto] mb-8 h-[1px] w-full border-none bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.2)_50%,transparent)] px-8 duration-300 motion-reduce:transition-none dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
     <div className="m-[0_auto] mb-8 grid grid-cols-3 gap-x-6 gap-y-10 px-8 text-center font-inter text-black/70 dark:text-white/70 md:grid-cols-4 md:gap-x-10 lg:grid-cols-4">
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <Link target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white" href={`https://github.com/${meta.accounts.github.username}`}>
        <>
         <StarIcon className="-mt-[2px] mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 group-hover:stroke-black motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{userData && ConvertNumber(userData.userStars)} Stars on repositories</span>
        </>
       </Link>
      </p>
      <p className="hidden font-semibold duration-200 motion-reduce:transition-none md:block">
       <Link target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white" href={`https://github.com/${meta.accounts.github.username}`}>
        <>
         <svg className="mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white" aria-hidden="true" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path>
         </svg>
         <span>{userData && ConvertNumber(contributions.total)} Commits</span>
        </>
       </Link>
      </p>
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <Link target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white" href={`https://github.com/${meta.accounts.github.username}`}>
        <>
         <svg viewBox="0 0 32 32" className="-mt-[2px] mr-1 inline h-5 w-5 fill-black/[50%] duration-200 group-hover:fill-black motion-reduce:transition-none dark:fill-white/[70%] dark:group-hover:fill-white" aria-hidden="true" role="img">
          <path fill="currentColor" d="M9 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm1 1.9A5.002 5.002 0 0 0 9 2a5 5 0 0 0-1 9.9v8.2A5.002 5.002 0 0 0 9 30a5 5 0 0 0 1-9.9V18h9a5 5 0 0 0 5-5v-1.1A5.002 5.002 0 0 0 23 2a5 5 0 0 0-1 9.9V13a3 3 0 0 1-3 3h-9v-4.1ZM23 10a3 3 0 1 1 0-6a3 3 0 0 1 0 6ZM12 25a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
         </svg>{" "}
         <span>{userData && ConvertNumber(userData.userForks)} Repositories forks</span>
        </>
       </Link>
      </p>
      <p className="font-semibold duration-200 motion-reduce:transition-none">
       <Link target="_blank" className="group flex items-center justify-center text-center duration-200 hover:text-black motion-reduce:transition-none dark:hover:text-white" href={`https://github.com/${meta.accounts.github.username}?tab=followers`}>
        <>
         <UsersIcon className="-mt-[2px] mr-1 inline h-5 w-5 stroke-black/[50%] duration-200 group-hover:stroke-black motion-reduce:transition-none dark:stroke-white/[70%] dark:group-hover:stroke-white" aria-hidden="true" role="img" /> <span>{userData && ConvertNumber(userData.userFollowers)} Github Followers</span>
        </>
       </Link>
      </p>
     </div>
    </div>
   </section>

   <section id={"about"} className="scroll-mt-20 pt-12 lg:px-24">
    <div className="relative mx-auto mb-7 text-center">
     <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="107" w="134" />
     </span>
     <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="70" w="134" />
     </span>
     <Image src={sparkles} alt="sparkles" width={"auto"} height={"auto"} className="hide pointer-events-none m-[0_auto] animate-pulse" />
     <h3 className="dark:color-black m-6 mt-0 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-inter text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">About me.</h3>

     <div className="prose m-auto px-6 text-center font-inter dark:prose-dark">
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
    </div>
   </section>

   <section id={"repositories"} className="scroll-mt-20 pt-12 lg:px-24">
    <div className="relative mx-auto before:absolute before:inset-0 before:z-[-1] before:bg-[length:22px_22px] before:bg-center before:bg-repeat-space before:opacity-10 before:bg-grid-[#000] before:gradient-mask-t-0 dark:before:opacity-20 dark:before:bg-grid-[#fff]" id={"repositories"}>
     <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-inter text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Most Popular Projects.</h3>
     <div className="relative">
      <GlowEffect className="xl-grid-cols-4 mb-8 grid grid-cols-1 gap-x-6 gap-y-10 pb-4 text-center font-inter text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
       {reposData &&
        reposData.map((repo) => {
         return repo.node.owner.login == "IgorKowalczyk" ? <RepoCard key={repo.node.id} {...repo.node} /> : null;
        })}
      </GlowEffect>
      <div className="pointer-events-visible section-fade absolute inset-x-0 bottom-0 z-20 flex pb-8 pt-32 duration-300">
       <div className="flex flex-1 flex-col items-center justify-center duration-200 motion-reduce:transition-none">
        <Link className="arrow link group pointer-events-auto relative mt-5 inline-block items-center justify-center p-2 pb-1 pl-0 pr-0 font-inter font-semibold duration-200 motion-reduce:transition-none" href="/repositories">
         <>
          See more repositories
          <svg className="arrowSymbol inline-block translate-x-[5px] duration-200 group-hover:translate-x-[10px] motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
           <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
           <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
          </svg>
         </>
        </Link>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section id={"techs"} className="scroll-mt-20 pt-12 lg:px-24">
    <div className="relative mx-auto mb-7 text-center">
     <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="107" w="134" />
     </span>
     <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-white/40">
      <Dots h="70" w="134" />
     </span>

     <h3 className="dark:color-black m-6 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-inter text-[35px] font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] md:text-[35px] lg:text-[37px] xl:text-[40px]">Technologies I use</h3>
    </div>
    <div className="mt-6 grid h-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
     {technologies.map((tech, index) => {
      return (
       <div key={index}>
        {tech.link ? (
         <Link href={tech.link} target="_blank" className="relative mx-auto flex w-full cursor-pointer items-center justify-between rounded-xl bg-zinc-200/[25%] px-4 py-2 font-inter text-sm font-semibold text-blue-900 backdrop-blur-[9px] duration-200 hover:bg-zinc-200/60 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
          <Image className={`${tech.class ?? ""} h-8 w-8 rounded-md`} loading="lazy" width={32} height={32} src={tech.icon} alt={tech.name} />
          <span className="font-semibold">{tech.name}</span>
         </Link>
        ) : (
         <div key={index} className="relative mx-auto flex w-full items-center justify-between rounded-xl bg-zinc-200/[25%] px-4 py-2 font-inter text-sm font-semibold text-blue-900 backdrop-blur-[9px] duration-200 hover:bg-zinc-200/60 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
          <Image className={`${tech.class ?? ""} h-8 w-8 rounded-md`} loading="lazy" width={32} height={32} src={tech.icon} alt={tech.name} />
          <span className="font-semibold">{tech.name}</span>
         </div>
        )}
       </div>
      );
     })}
    </div>
    <p className="mt-9 text-center font-inter text-xl font-semibold ">...and many others!</p>
   </section>

   <section id={"contact"}>
    <div className="h-full scroll-mt-20 py-36 pt-24 lg:px-36">
     <header>
      <Image src={sparkles} alt="sparkles" width={"auto"} height={"auto"} className="hide pointer-events-none m-[0_auto] animate-pulse" />
      <h3 className="dark:color-black mb-2 bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text text-center font-inter text-4xl font-semibold tracking-[-0.03em] duration-300 text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff] lg:text-5xl ">Contact me.</h3>
      <p className="py-1 text-center font-inter  text-base text-gray-600 dark:text-gray-300">Want to order a project? Or do you just want to stay in touch?</p>
     </header>
     <div className="relative">
      <div className="relative mt-6 grid h-full w-full grid-cols-1 gap-6 divide-x divide-none dark:divide-none md:grid-cols-2 md:divide-gray-200 md:dark:divide-white/20">
       <div className="relative m-[0_auto] mb-4 flex w-full max-w-screen-sm rounded-[10px] border-[1px] border-black/[15%] bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b]">
        <Contact />
       </div>
       <div className="space-y-4 p-4">
        <p className="font-inter text-xl font-semibold">Or contact me with...</p>
        {contact.links.map((element, index) => (
         <Link className="group ml-auto mt-2 flex w-full rounded-md border border-transparent bg-blue-100 px-4 py-2 font-inter text-sm font-semibold text-blue-900 backdrop-blur-[9px] duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" href={element.href} key={index} target="_blank">
          <>
           {element.icon} {element.title}
          </>
         </Link>
        ))}
       </div>
       <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-white/40">
        <Dots h="107" w="134" />
       </span>
       <span className="absolute -bottom-7 left-0 z-[-1] fill-black/40 dark:fill-white/40">
        <Dots h="70" w="134" />
       </span>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
}
