import dynamic from "next/dynamic";
import NextLink from "next/link";
import { config } from "@/config";
import { useRouter } from "next/router";
const MobileNav = dynamic(() => import("@components/MobileNav"));
const Settings = dynamic(() => import("@components/Settings"));
const Popover = dynamic(() => import("@components/NavPopover"));

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
      <h3 className=" z-[1001] mx-8 font-poppins text-lg font-bold text-black duration-300 motion-reduce:transition-none dark:text-white">Igor Kowalczyk</h3>
     </a>
    </NextLink>
    <MobileNav />
    <div className="mr-auto flex gap-1">
     {config.nav.left.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
     <Popover className="relative" />
    </div>
    <div className="ml-auto">
     {config.nav.right.map((item, index) => {
      return (
       <NextLink href={item.href} key={index}>
        <a href={item.href} target={item.target || "_self"} className="hidden rounded-lg p-1 font-normal text-gray-600 transition-all hover:bg-gray-200 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 sm:px-3 sm:py-2 md:inline-block">
         {item.title}
        </a>
       </NextLink>
      );
     })}
    </div>
    <Settings className="text-right" />
   </nav>
  </div>
 );
}

/*
              <div className="ml-auto w-32">
               <Listbox value={mounted} onChange={(t) => null}>
                {({ open }) => (
                 <div className="relative">
                  <Listbox.Button className={`${open ? "text-gray-800 dark:text-gray-200" : ""}text-gray-700 relative w-full cursor-pointer rounded-lg border-[1px] border-black/[10%] py-2 pl-2 pr-10 text-left duration-200 hover:border-black/30 hover:text-gray-800 motion-reduce:transition-none  dark:border-white/[15%] dark:text-gray-200/75 dark:hover:border-white/25 dark:hover:text-gray-200 sm:text-sm`}>
                   <span className="flex truncate">
                    {resolvedTheme === "dark" ? (
                     <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Enabled
                     </>
                    ) : (
                     <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Disabled
                     </>
                    )}
                   </span>
                   <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                   </span>
                  </Listbox.Button>
                  <Transition as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                   <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border-[1px] border-black/[10%] bg-white py-1 text-base shadow-2xl backdrop-blur-[9px] dark:border-white/[15%] dark:bg-[#08152b] sm:text-sm">
                    <Listbox.Option key="enabled" className="relative cursor-pointer select-none py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"enabled"}>
                     <span className="flex truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-5 w-5 text-gray-800 duration-200 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Enabled
                     </span>
                    </Listbox.Option>
                    <Listbox.Option key="disabled" className="relative cursor-pointer select-none  py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"disabled"}>
                     <span className="flex truncate">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-5 w-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Disabled
                     </span>
                    </Listbox.Option>
                   </Listbox.Options>
                  </Transition>
                 </div>
                )}
               </Listbox>
              </div>
              */
