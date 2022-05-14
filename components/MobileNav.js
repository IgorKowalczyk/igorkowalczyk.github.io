import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState } from "react";
import { config } from "@/config";

export default function MobileMenu() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
  enterDelay: 20,
  exitDelay: 300,
 });

 function toggleMenu() {
  isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
 }

 return (
  <>
   <button className="burger visible z-[1001] md:hidden" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
    <svg data-hide={isMenuOpen} className="absolute h-5 w-5 text-gray-900 dark:text-gray-100" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
   <path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
    <svg data-hide={!isMenuOpen} className="absolute h-5 w-5 text-gray-900 dark:text-gray-100" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
   <path d="M18 6L6 18" />
   <path d="M6 6l12 12" />
  </svg>

   </button>
   {isMenuMounted && (
    <ul className={cn("menu border-r-[1px] border-black/[10%] dark:border-white/[15%] duration-200 px-3.5 absolute flex flex-col bg-white dark:bg-[#08152b] shadow backdrop-blur-[8px] dark:shadow-2xl mt-[73px]", isMenuRendered && "menuRendered")}>
     {config.nav.left.map((item, index) => {
      return (
       <li key={index} className="mt-6 border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100" style={{ transitionDelay: `${(150 * index) - 50}ms` }}>
        <Link href={item.href} key={index}>
         <a className="flex w-auto pb-4" onClick={toggleMenu}>{item.title}</a>
        </Link>
       </li>
      );
     })}
    </ul>
   )}
  </>
 );
}

