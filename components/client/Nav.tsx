"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "@/components/client/MobileNav";
import Popover from "@/components/client/NavPopover";
import Settings from "@/components/client/Settings";
import { nav } from "@/config";
import { cn } from "@/lib/utils";

interface NavItemProps {
 path: string;
 text: string;
 target?: string;
}

function NavItem({ path, text, target }: NavItemProps) {
 const pathname = usePathname() || "/";
 let isActive = pathname.split("/")[1].trim() === path.split("/")[1].trim();

 if (path.startsWith("https://") || path.startsWith("http://")) {
  isActive = false;
  target = "_blank";
 }

 return (
  <Link
   key={path}
   href={path}
   className={cn("relative rounded-md px-2 py-1 transition-all hover:bg-black/10 hover:text-neutral-800 dark:hover:bg-white/10 dark:hover:text-neutral-200 sm:px-3 sm:py-2", {
    "bg-black/10 dark:bg-white/10 dark:text-neutral-200": isActive,
    "text-gray-700 dark:text-neutral-400": !isActive,
   })}
  >
   <>
    {text}
    {target && (target === "_blank" || target === "_external") && (
     <svg aria-hidden="true" className="ml-1 inline-block fill-black align-top opacity-50 dark:fill-white" height="7" viewBox="0 0 6 6" width="7">
      <path d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z" fill="var(--accents-3)" />
     </svg>
    )}
   </>
  </Link>
 );
}

export function Nav() {
 return (
  <nav className="z-50 mx-auto flex w-full max-w-2xl items-center gap-4 pt-9 font-mono">
   <Link href="/" className="text-lg font-black text-gray-800 duration-300 motion-reduce:transition-none dark:text-white">
    IK
    <span className="bg-gradient-to-r from-[#6310ff] to-[#14291ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </Link>
   <MobileNav />
   <div className="mr-auto hidden gap-2 lg:inline-flex">
    {nav.main.map((item) => {
     return <NavItem path={item.href} text={item.title} key={`nav-left-${item.href}`} />;
    })}
    <Popover className="relative" />
   </div>
   <Settings />
  </nav>
 );
}
