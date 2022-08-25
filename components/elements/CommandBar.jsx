import { useKBar } from "kbar";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarSearch } from "kbar";
import { useRouter } from "next/router";
import { ArrowRightIcon, HomeIcon, RectangleStackIcon, NewspaperIcon, CameraIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { allBlogs } from "contentlayer/generated";

export function CommandBarInvoker() {
 const { query } = useKBar();
 return (
  <button className="fixed right-4 bottom-4 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 backdrop-blur-[5px] transition-all duration-300 hover:bg-blue-200 firefox:bg-gray-800 motion-reduce:transition-none dark:bg-white/10 dark:hover:bg-white/[15%] firefox:dark:bg-slate-800" onClick={() => query.toggle()} aria-label="Command Bar">
   <svg className="feather feather-command" fill="none" height={24} stroke="currentColor" strokeLinecap="rsound" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3 3 3 0 003-3 3 3 0 00-3-3H6a3 3 0 00-3 3 3 3 0 003 3 3 3 0 003-3V6a3 3 0 00-3-3 3 3 0 00-3 3 3 3 0 003 3h12a3 3 0 003-3 3 3 0 00-3-3z" />
   </svg>
  </button>
 );
}

export function KProvider({ children }) {
 const { push } = useRouter();

 const actions = [
  {
   id: "home",
   name: "Home",
   keywords: "index root",
   shortcut: ["h"],
   perform: () => push("/"),
   section: "Pages",
   icon: <HomeIcon />,
  },
  {
   id: "projects",
   name: "Projects",
   keywords: "projects creations apps repositories",
   section: "Pages",
   icon: <RectangleStackIcon />,
  },
  {
   id: "projects-page",
   name: "All Projects",
   keywords: "projects creations apps repositories",
   shortcut: ["p"],
   parent: "projects",
   perform: () => push("/repositories"),
  },
  {
   id: "blog",
   name: "Blog",
   keywords: "blogs blog post articles tutorials",
   shortcut: ["b"],
   section: "Pages",
   icon: <NewspaperIcon />,
   perform: () => push("/blog"),
  },
  {
   id: "photography",
   name: "Photography",
   keywords: "photography photos camera",
   shortcut: ["c"],
   icon: <CameraIcon />,
   perform: () => push("/photography"),
  },
 ];

 return (
  <>
   <KBarProvider actions={actions}>
    <KBarPortal>
     <KBarPositioner className="fixed inset-0 z-[99999] overflow-hidden bg-black bg-opacity-25 pb-6 backdrop-blur-[4px] duration-200 firefox:bg-opacity-50">
      <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-[10px] border-[1px] border-black/[15%] bg-white px-6 text-left shadow-xl transition-all dark:border-white/[15%] dark:bg-[#08152b]">
       <div className="mx-2 mt-2 flex items-center justify-between py-4">
        <span>
         <MagnifyingGlassIcon className="mr-2 mb-0.5 h-5 w-5 text-gray-700 dark:text-gray-100" />
        </span>
        <KBarSearch className="w-full rounded-md border-b border-none border-gray-300 bg-transparent text-gray-700 outline-none dark:text-gray-100" />
        <Kbd>esc</Kbd>
       </div>
       <div className="pb-6">
        <KResults />
       </div>
      </KBarAnimator>
     </KBarPositioner>
    </KBarPortal>
    {children}
   </KBarProvider>
  </>
 );
}

export function Kbd({ children, className }) {
 return (
  <>
   <kbd className={`${className} flex rounded-[2em] border-[1px] border-black/[15%] py-[0.12em] px-[0.5em] align-middle font-poppins text-[88%] text-black/[60%] duration-200 motion-reduce:transition-none dark:border-white/[15%] dark:bg-white/[5%] dark:text-white/[50%]`}>{children}</kbd>
  </>
 );
}

import { KBarResults, useMatches } from "kbar";
import { cloneElement } from "react";

export function KResults() {
 const { results } = useMatches();

 return (
  <KBarResults
   items={results}
   className="my-2"
   onRender={({ item, active }) =>
    typeof item === "string" ? (
     <div className="my-4 px-3 pt-4 pb-2 text-sm text-gray-400">
      {item}
      <div className="h-4" />
     </div>
    ) : (
     <div className={`${active ? "bg-blue-200 dark:bg-white/[15%]" : "bg-transparent"} flex cursor-pointer items-center justify-between rounded-lg px-3 py-3 transition-colors`}>
      <div className="flex items-center">
       {item.icon && (
        <div>
         {cloneElement(item.icon, {
          className: "h-4 w-4",
         })}
        </div>
       )}
       {item.parent && (
        <>
         <span className="flex items-center opacity-60">
          {item.ancestors.find((ancestor) => ancestor.id === item.parent)?.name}
          <ArrowRightIcon className="mx-2 h-4 w-4 " />{" "}
         </span>
        </>
       )}
       <span className="text-md">{item.name}</span>
      </div>
      {item.shortcut?.length && (
       <div className="flex items-center justify-center space-x-2">
        {item.shortcut.map((shortcut) => (
         <Kbd key={shortcut}>{shortcut}</Kbd>
        ))}
       </div>
      )}
     </div>
    )
   }
  />
 );
}
