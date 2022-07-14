import dynamic from "next/dynamic";
import { SWR } from "@lib/swr";
import { meta, social } from "@/config";
import { Container } from "@components/elements/Container";
import { RepoCard, RepoCardSkeleton } from "@components/elements/RepoCard";
const Squares = dynamic(() => import("@components/decorations/Squares"));
const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

export default function gitub_repos({ props }) {
 const { data: _repos } = SWR("/api/git/repo/public/50");
 const repos = _repos ? _repos : null;
 return (
  <Container title={`${meta.title} - Github Repositories`}>
   <div className="fixed top-full right-full z-[-1] translate-x-1/2 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>
   <h1 className="my-6 flex items-center justify-center bg-gradient-to-r from-[#712af6] to-[#1a8aec] box-decoration-clone bg-clip-text px-8 text-center font-poppins text-[2rem] font-semibold text-fill-transparent motion-reduce:transition-none dark:from-[#a2facf] dark:to-[#64acff]">
    {meta.author} Repositories{" "}
    {_repos ? (
     repos && <>({repos?.length})</>
    ) : (
     <div className="spinner ml-3" id="nprogress">
      <div className="spinner-icon"></div>
     </div>
    )}
   </h1>
   <div className="mx-8">
    <div className="!m-[0_auto] !my-9 mx-8 hidden w-fit rounded-[10px] border-[1px] border-black/[15%] bg-white p-4 font-poppins duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b] md:block">
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

   {_repos ? (
    repos && (
     <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
      {repos?.map((repo) => (
       <RepoCard key={repo.id} {...repo} />
      ))}
     </div>
    )
   ) : (
    <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 px-8 text-center font-poppins text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
     {Array.from({ length: 20 }).map((_, index) => (
      <RepoCardSkeleton key={index} />
     ))}
    </div>
   )}
  </Container>
 );
}

//<div className="overflow-hidden fixed top-full left-full z-[-1] -translate-x-1/2 -translate-y-full transform">
//<Squares w="404" h="404" />
//</div>
