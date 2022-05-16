import cn from "classnames";
import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState } from "react";
import { config } from "@/config";

export default function MobileMenu() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
  enterDelay: 20,
  exitDelay: 500,
 });

 const menuItems = {
  array: [...config.nav.left, ...config.nav.right],
 };
 function toggleMenu() {
  isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
 }

 return (
  <>
   <button className="burger visible relative h-10 w-10 border-0 bg-transparent md:hidden" aria-label="Toggle menu" type="button" onClick={toggleMenu}>
    <svg data-hide={isMenuOpen} className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 scale-100 text-gray-900 opacity-100 motion-reduce:transition-none duration-200 dark:text-gray-100" width="20" height="20" viewBox="0 0 20 20" fill="none">
     <path d="M2.5 7.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
     <path d="M2.5 12.5H17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    <svg data-hide={!isMenuOpen} className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 scale-100 text-gray-900 opacity-100 motion-reduce:transition-none duration-200 dark:text-gray-100" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
     <path d="M18 6L6 18" />
     <path d="M6 6l12 12" />
    </svg>
   </button>
   {isMenuMounted && (
    <div className={cn(isMenuRendered && "menuRendered", "absolute left-0 top-0 z-[1001] mt-[73px] flex h-screen w-3/4 flex-col opacity-0 backdrop-blur-[9px] duration-200 md:hidden ")}>
     <div className="h-full border-r-[1px] border-black/[10%] bg-white bg-opacity-70 px-3.5 shadow motion-reduce:transition-none duration-200 firefox:bg-opacity-100 dark:border-white/[15%] dark:bg-[#08152b] dark:bg-opacity-70 dark:shadow-2xl dark:firefox:bg-opacity-100">
      <div>
       {menuItems.array.map((item, index) => {
        return (
         <p key={index} className="mt-6 w-0 translate-x-[-16px] whitespace-nowrap border-b border-gray-300 text-sm font-semibold text-gray-900 opacity-0 motion-reduce:transition-none duration-300 dark:border-gray-700/75 dark:text-gray-100" style={{ transitionDelay: `${150 * index - 50}ms` }}>
          <Link href={item.href} key={index}>
           <a className="flex w-auto pb-4" onClick={toggleMenu}>
            {item.title}
           </a>
          </Link>
         </p>
        );
       })}
      </div>
     </div>
    </div>
   )}
  </>
 );
}
