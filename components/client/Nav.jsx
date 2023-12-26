"use client";

import { nav, meta } from "/config";
import { usePathname } from "next/navigation";
import MobileNav from "components/client/MobileNav";
import Settings from "components/client/Settings";
import Popover from "components/client/NavPopover";
import Link from "next/link";
import clsx from "clsx";

function NavItem({ path, text, target }) {
 let pathname = usePathname() || "/";
 let isActive = pathname.split("/")[1].trim() === path.split("/")[1].trim();

 if (path.startsWith("https://") || path.startsWith("http://")) {
  isActive = false;
  target = "_blank";
 }

 return (
  <Link
   key={path}
   href={path}
   className={clsx("relative flex flex-wrap items-center rounded-md p-1 align-middle transition-all hover:bg-black/10 hover:text-neutral-800 sm:px-3 sm:py-2 dark:hover:bg-white/10 dark:hover:text-neutral-200", {
    "bg-black/10 dark:bg-white/10 dark:text-neutral-200": isActive,
    "text-gray-700 dark:text-neutral-400": !isActive,
   })}
  >
   <>
    {text}
    {target && (target === "_blank" || target === "_external") && (
     <svg aria-hidden="true" className="ml-1 mt-1 fill-black opacity-50 dark:fill-white" height="7" viewBox="0 0 6 6" width="7">
      <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--accents-3)" />
     </svg>
    )}
   </>
  </Link>
 );
}

export function Nav() {
 return (
  <nav key="nav" className="fixed top-0 z-[100] mx-0 mt-0 w-full font-sans shadow dark:shadow-2xl">
   <div className="relative mx-auto flex h-[73px] w-full items-center justify-start border-b-[1px] border-gray-200/60 bg-white pb-4 pt-4 duration-300 motion-reduce:transition-none lg:justify-between lg:!bg-opacity-70 dark:border-neutral-800 dark:bg-[#161617]">
    <div className="fixed inset-0 z-[-1] h-[inherit] w-full lg:backdrop-blur-xl" />
    <Link href="/" key="main_page">
     <h3 className=" z-[1001] mx-8 text-xl font-semibold text-gray-800 duration-300 motion-reduce:transition-none dark:text-white">
      {meta.title}
      <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
     </h3>
    </Link>
    <MobileNav />
    <div className="mr-auto hidden gap-2 lg:flex">
     {nav.left.map((item, index) => {
      return <NavItem path={item.href} text={item.title} target={item.target} key={index} />;
     })}
     <Popover className="relative" />
    </div>
    <div className="ml-auto hidden gap-2 lg:flex">
     {nav.right.map((item, index) => {
      return <NavItem path={item.href} text={item.title} target={item.target} key={index} />;
     })}
    </div>
    <div className="ml-auto lg:ml-0">
     <Settings />
    </div>
   </div>
  </nav>
 );
}
