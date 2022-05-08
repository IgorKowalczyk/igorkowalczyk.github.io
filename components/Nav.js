import classNames from "classnames";
import NextLink from "next/link";
import { config } from "@/config";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

function NavItem({ href, text, target }) {
 const router = useRouter();
 const isActive = router.asPath.slice(0, -1) === href.slice(0, -1);
 return (
  <NextLink href={href}>
   <a target={target} className={classNames(isActive ? "font-semibold text-gray-800 dark:text-gray-200" : "font-normal text-gray-600 dark:text-gray-400", "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all")}>
    <span>{text}</span>
   </a>
  </NextLink>
 );
}

export default function Nav() {
 const [mounted, setMounted] = useState(false);
 const { resolvedTheme, setTheme } = useTheme();
 useEffect(() => setMounted(true), []);
 return (
  <div className="font-poppins fixed mt-0 top-0 w-full z-[100] backdrop-blur-[8px] mx-0 shadow-2xl">
   <nav className="border-b-[1px] border-white/[15%] bg-white dark:bg-[#08152b] dark:bg-opacity-70 flex items-center justify-between w-full relative mx-auto pt-4 pb-4">
    <NextLink href="/">
     <a>
      <h1 className=" mx-8 text-white font-bold font-poppins text-lg">Igor Kowalczyk</h1>
     </a>
    </NextLink>

    <div className="mr-auto">
     {config.nav.left.map((item) => {
      return <NavItem href={item.href} text={item.title} key={item.href}/>;
     })}
    </div>
    <div className="ml-auto">
     {config.nav.right.map((item) => {
      return (
       <NextLink href={item.href} key={item.key}>
        <a href={item.href} target={item.target || "_self"} className="font-normal text-gray-600 dark:text-gray-400 hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-all">
         {item.title}
        </a>
       </NextLink>
      );
     })}
    </div>
    <button aria-label="Toggle Dark Mode" type="button" className="mx-8 w-9 h-9 bg-gray-200 rounded-lg dark:bg-white/10 flex items-center justify-center ring-gray-300  transition-all" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
     {mounted && (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-gray-800 dark:text-gray-200">
       {resolvedTheme === "dark" ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />}
      </svg>
     )}
    </button>
   </nav>
  </div>
 );
}
