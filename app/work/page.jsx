import { Squares } from "@/components/Decorations";
import { Description, Header1, Header2 } from "@/components/Headers";
import { ProjectCard } from "@/components/ProjectCard";
import { RepositoryCard } from "@/components/RepositoryCard";
import { projects } from "@/config";
import { GetRepos } from "@/lib/graphql";

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
    <Description className="mb-6">I have been programming for {new Date().getFullYear() - 2018} years, and I have worked on many projects. Here are some of my most recent projects, you can find more on my Github profile.</Description>

    <Header2 className="mb-3">Recent Projects</Header2>

    {projects.map((project) => (
     <ProjectCard key={`project-${project.name}`} project={project} className="mb-6" />
    ))}

    <Header2 className="mt-6">Github Repositories</Header2>
    {repositories && (
     <div className="mt-3 columns-1 gap-6 text-center text-gray-800 dark:text-white md:columns-2">
      {repositories?.map((repo) => (
       <RepositoryCard key={repo.id} {...repo} className="mb-6" />
      ))}
     </div>
    )}
   </div>
  </>
 );
}
