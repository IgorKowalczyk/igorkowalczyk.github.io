"use client";

import { nav, meta } from "/config";
import { usePathname } from "next/navigation";
import MobileNav from "components/elements/MobileNav";
import Settings from "components/elements/Settings";
import Popover from "components/elements/NavPopover";
import Link from "next/link";

function NavItem({ href, text, target }) {
 const path = usePathname();
 if (!href) return null;
 if (!path) return null;
 let isActive = path.split("/")[1].trim() === href.split("/")[1].trim();
 if (href.startsWith("https://") || href.startsWith("http://")) {
  isActive = false;
  target = "_blank";
 }
 return (
  <Link href={href} key={href} target={target} className={`${isActive ? "active text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"} nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-black/10 hover:text-gray-800 motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:inline-block`}>
   {text}
  </Link>
 );
}

export function Nav() {
 return (
  <nav key="nav" className="fixed top-0 z-[100] mx-0 mt-0 w-full font-inter shadow dark:shadow-2xl">
   <div className="relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-[#08152b] dark:bg-opacity-70 dark:firefox:bg-opacity-100">
    <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-xl"></div>
    <Link href="/" key="main_page">
     <h3 className=" z-[1001] mx-8 font-inter text-xl font-semibold text-black duration-300 motion-reduce:transition-none dark:text-white">
      {meta.title}
      <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
     </h3>
    </Link>
    <MobileNav />
    <div className="mr-auto flex gap-1">
     {nav.left.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
     <Popover className="relative" />
    </div>
    <div className="ml-auto flex gap-1">
     {nav.right.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
     <Settings className="text-right" />
    </div>
   </div>
  </nav>
 );
}
