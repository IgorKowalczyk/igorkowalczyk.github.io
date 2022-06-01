import NextLink from "next/link";
import { config } from "@/config";
import { Transition, Popover } from "@headlessui/react";

export default function NavPopover(props) {
 return (
  <Popover {...props}>
  {({ open, close }) => (
   <>
    <Popover.Button className={`${open ? "pseudo-border-active bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-gray-200" : ""} pseudo-border group relative hidden rounded-lg p-1 font-poppins text-gray-600 outline-none transition-all duration-200 hover:bg-gray-200 hover:text-gray-800 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:flex md:items-center`}>
     <span>More</span>
     <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? "-rotate-90 text-gray-800 dark:text-gray-200" : ""} ml-1 h-4 w-4 text-gray-600 duration-150 ease-in-out group-hover:-rotate-90 group-hover:text-gray-800 dark:group-hover:text-gray-200`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
     </svg>
    </Popover.Button>
    <Transition enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-200 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
     <Popover.Panel unmount={false} className="absolute left-1/2 z-10 w-screen max-w-sm -translate-x-1/2 transform px-4 pt-3 sm:px-0 ">
      <div className="overflow-hidden rounded-lg border-[1px] border-black/[10%] shadow-lg  dark:border-white/[15%]">
       <div className="relative bg-white p-7 dark:bg-[#08152b]">
        <NextLink href={`https://github.com/${config.social.github.username}`} key="github">
         <a onClick={() => close()} key="solutions" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
           <svg xmlns="http://www.w3.org/2000/svg" className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
           </svg>
          </div>
          <div className="ml-4">
           <p className="text-sm font-medium text-gray-900 dark:text-white">All my projects</p>
           <p className="text-sm text-gray-500 dark:text-gray-400">Web development, Discord Bots, and more</p>
          </div>
         </a>
        </NextLink>
        <NextLink href="/blog" key="blog">
         <a onClick={() => close()} key="blog_navbar" className="-m-3 mt-4 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
           <svg xmlns="http://www.w3.org/2000/svg" className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
           </svg>
          </div>
          <div className="ml-4">
           <p className="text-sm font-medium text-gray-900 dark:text-white">Developer Blog</p>
           <p className="text-sm text-gray-500 dark:text-gray-400">About my projects, web security and design</p>
          </div>
         </a>
        </NextLink>
        <NextLink href="/contact" key="contact_navbar">
         <a onClick={() => close()} key="contact" className="-m-3 mt-4 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
           <svg xmlns="http://www.w3.org/2000/svg" className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
           </svg>
          </div>
          <div className="ml-4">
           <p className="text-sm font-medium text-gray-900 dark:text-white">Contact me</p>
           <p className="text-sm text-gray-500 dark:text-gray-400">Do you have any questions? I always answer</p>
          </div>
         </a>
        </NextLink>
       </div>
       <div className="border-t-[1px] border-black/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#08152b]">
        <NextLink href={`https://github.com/${config.social.github.username}`} key="github_external">
         <a onClick={() => close()} target="_blank" className="group flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none dark:hover:bg-white/5 ">
          <span className="flex items-center">
           <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
             <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
           </div>
           <span className="text-sm font-medium text-gray-900 dark:text-white">Github Profile</span>
          </span>
          <span className="block text-sm text-gray-500 dark:text-gray-400">See all of my work</span>
         </a>
        </NextLink>
       </div>
      </div>
     </Popover.Panel>
    </Transition>
   </>
  )}
 </Popover>
 )
}