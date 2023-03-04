import { GlowEffect } from "components/elements/GlowEffect";
import { RepoCard } from "components/elements/RepoCard";
import { GetRepos } from "lib/graphQl";
import Squares from "components/decorations/Squares";

export const metadata = {
 title: "Github Repositories",
};

export default async function GithubRepositories() {
 const { user } = await GetRepos("public", 50);
 const repositories = user.repositories.edges.map((edge) => edge.node);
 repositories.sort((a, b) => b.stars - a.stars || a.isArchived - b.isArchived);

 return (
  <>
   <GlowEffect />
   <div className="fixed top-full right-full z-[-1] translate-x-1/2 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>
   <h1 className="mt-6 mb-8 flex items-center justify-center box-decoration-clone bg-clip-text px-8 text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
    My work, from the beginning <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <div id="cards">
    {repositories && (
     <div className="xl-grid-cols-4 grid grid-cols-1 gap-y-10 gap-x-6 text-center font-inter text-black dark:text-white md:grid-cols-2 md:gap-x-10 lg:grid-cols-3">
      {repositories?.map((repo) => (
       <RepoCard key={repo.id} {...repo} className="card" />
      ))}
     </div>
    )}
   </div>
  </>
 );
}
