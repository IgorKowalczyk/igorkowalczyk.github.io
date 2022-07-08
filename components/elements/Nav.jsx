import dynamic from "next/dynamic";
import NextLink from "next/link";
import { nav, meta } from "@/config";
import { useRouter } from "next/router";
const MobileNav = dynamic(() => import("@components/elements/MobileNav"));
const Settings = dynamic(() => import("@components/elements/Settings"));
const Popover = dynamic(() => import("@components/elements/NavPopover"));

function NavItem({ href, text, target }) {
 const router = useRouter();
 const isActive = router.asPath.split("#")[0] === href.split("#")[0];
 return (
  <NextLink href={href} key={href}>
   <a target={target} key={href} className={`${isActive ? "active text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"} nav-border relative hidden rounded-lg p-1 transition-all duration-200 before:w-[calc(100%_-_1.5em)] after:w-[calc(100%_-_1.5em)] hover:bg-gray-200 hover:text-gray-800 motion-reduce:transition-none dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:inline-block`}>
    <span className="duration-100">{text}</span>
   </a>
  </NextLink>
 );
}

export function Nav() {
 return (
  <div className="fixed top-0 z-[100] mx-0 mt-0 w-full font-poppins shadow dark:shadow-2xl">
   <nav key="nav" className="relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-[#08152b] dark:bg-opacity-70 dark:firefox:bg-opacity-100">
    <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-[9px]"></div>
    <NextLink href="/" key="main_page">
     <a>
      <h3 className=" z-[1001] mx-8 font-poppins text-lg font-bold text-black duration-300 motion-reduce:transition-none dark:text-white">
       {meta.title}
       <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
      </h3>
     </a>
    </NextLink>
    <MobileNav />
    <div className="mr-auto flex gap-1">
     {nav.left.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
     <Popover className="relative" />
    </div>
    <div className="ml-auto flex gap-1">
     {nav.right.map((item, index) => {
      return (
       <NextLink href={item.href} key={index}>
        <a href={item.href} target={item.target || "_self"} className="hidden rounded-lg p-1 font-normal text-gray-600 transition-all hover:bg-gray-200 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 sm:px-3 sm:py-2 md:inline-block">
         {item.title}
        </a>
       </NextLink>
      );
     })}
     <Settings className="text-right" />
    </div>
   </nav>
  </div>
 );
}
