import Link from "next/link";
import useDelayedRender from "use-delayed-render";
import { useState } from "react";
import { nav } from "@/config";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline";

export default function MobileNav() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const { mounted: isMounted, rendered: isRendered } = useDelayedRender(isMenuOpen, {
  enterDelay: 20,
  exitDelay: 500,
 });

 const menuItems = [...nav.left, ...nav.right];

 return (
  <>
   <button
    className="burger visible relative h-10 w-10 border-0 bg-transparent md:hidden"
    aria-label="Toggle menu"
    type="button"
    onClick={() => {
     isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    }}
   >
    <MenuAlt2Icon data-hide={isMenuOpen} className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 scale-100 text-gray-900 !opacity-100 duration-200 motion-reduce:transition-none dark:text-gray-100" />
    <XIcon data-hide={!isMenuOpen} className="absolute top-1/2 left-1/2 h-5 w-5 -translate-y-1/2 -translate-x-1/2 scale-100 text-gray-900 !opacity-100 duration-200 motion-reduce:transition-none dark:text-gray-100" />
   </button>
   {isMounted && (
    <div className={`${isRendered ? "rendered !opacity-100" : ""} absolute left-0 top-0 z-[1001] mt-[73px] flex h-screen w-3/4 flex-col opacity-0 backdrop-blur-[9px] duration-200 motion-reduce:transition-none md:hidden`}>
     <div className="h-full border-r-[1px] border-black/[10%] bg-white bg-opacity-70 px-3.5 shadow duration-200 firefox:bg-opacity-100 motion-reduce:transition-none dark:border-white/[15%] dark:bg-[#08152b] dark:bg-opacity-70 dark:shadow-2xl dark:firefox:bg-opacity-100">
      <div className="mt-3">
       {menuItems.map((item, index) => {
        return (
         <p key={index} className={`${isRendered ? "w-full translate-x-0 border-gray-200 !opacity-100 dark:border-gray-700/75" : "w-0 border-transparent dark:border-transparent"} group translate-x-[-16px] whitespace-nowrap border-b text-sm font-semibold text-gray-900 opacity-0 duration-200 motion-reduce:transition-none dark:text-gray-100`} style={{ transitionDelay: `${150 * index - 50}ms` }}>
          <Link href={item.href} key={index}>
           <a
            className="flex w-auto p-4 pb-4  duration-200 group-hover:pl-6 motion-reduce:transition-none"
            onClick={() => {
             isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
            }}
            target={item.target}
           >
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
