import { SWR } from "@lib/swr";
import { meta, social } from "@/config";
import { Container } from "@components/elements/Container";
import { RepoCard, RepoCardSkeleton } from "@components/elements/RepoCard";
import { useEffect } from "react";
import Squares from "@components/decorations/Squares";
import GitHubCalendar from "react-github-calendar";

export default function GithubRepositories() {
 const { data: _Repos } = SWR("/api/github/repo/public/50");
 const repos = _Repos ? _Repos : null;

 useEffect(() => {
  if (typeof window !== "undefined") {
   document.getElementById("cards").onmousemove = (e) => {
    for (const card of document.getElementsByClassName("card")) {
     const rect = card.getBoundingClientRect();
     card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
     card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
   };
  }
 });

 return (
  <Container title={`${meta.title} - Github Repositories`}>
   <div className="fixed top-full right-full z-[-1] translate-x-1/2 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>
   <h1 className="mt-6 mb-2 flex items-center justify-center box-decoration-clone bg-clip-text px-8 text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
    My work, from the beginning <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <div id="cards">
    <div className="mx-8">
     <div className="card z-10 !m-[0_auto] !my-9 mx-8 hidden w-fit rounded-[10px] border-[1px] border-black/[15%] bg-white p-4 font-inter duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b] md:block">
      <GitHubCalendar
       username={social.github.username}
       theme={{
        level0: "var(--calendar-default)",
        level1: "#9be9a8",
        level2: "#40c463",
        level3: "#30a14e",
        level4: "#216e39",
       }}
      ></GitHubCalendar>
     </div>
    </div>

    {_Repos ? (
     repos && (
      <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-inter text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
       {repos?.map((repo) => (
        <RepoCard key={repo.id} {...repo} className="card" />
       ))}
      </div>
     )
    ) : (
     <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-inter text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
      {Array.from({ length: 20 }).map((_, index) => (
       <RepoCardSkeleton key={index} />
      ))}
     </div>
    )}
   </div>
  </Container>
 );
}

//<div className="overflow-hidden fixed top-full left-full z-[-1] -translate-x-1/2 -translate-y-full transform">
//<Squares w="404" h="404" />
//</div>
