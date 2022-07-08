import NextLink from "next/link";
import { social } from "@/config";
import { Transition, Popover } from "@headlessui/react";
import { CodeIcon, CollectionIcon, MailOpenIcon, ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/outline";

export default function NavPopover(props) {
 return (
  <Popover {...props}>
   {({ open, close }) => (
    <>
     <Popover.Button className={`${open ? "active bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-gray-200" : ""} nav-border group relative hidden rounded-lg p-1 font-poppins text-gray-600 transition-all duration-200 hover:bg-gray-200 hover:text-gray-800 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-gray-200 sm:px-3 sm:py-2 md:flex md:items-center`}>
      <span>More</span>
      <ChevronRightIcon className={`${open ? "rotate-90 text-gray-800 dark:text-gray-200" : ""} ml-1 h-4 w-4 text-gray-600 duration-150 ease-in-out group-hover:rotate-90 group-hover:text-gray-800 dark:group-hover:text-gray-200`} />
     </Popover.Button>
     <Transition enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-200 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
      <Popover.Panel unmount={false} className="absolute left-1/2 z-10 w-screen max-w-sm -translate-x-1/2 transform px-4 pt-3 sm:px-0 ">
       <div className="overflow-hidden rounded-lg border-[1px] border-black/[10%] shadow-lg  dark:border-white/[15%]">
        <div className="relative bg-white p-3 dark:bg-[#08152b]">
         <NextLink href={`https://github.com/${social.github.username}`} key="github">
          <a onClick={() => close()} key="solutions" className="flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
            <CodeIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
           </div>
           <div className="ml-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white">All my projects</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Web development, Discord Bots, and more</p>
           </div>
          </a>
         </NextLink>
         <NextLink href="/blog" key="blog">
          <a onClick={() => close()} key="blog_navbar" className="mt-1 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
            <CollectionIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
           </div>
           <div className="ml-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Developer Blog</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">About my projects, web security and design</p>
           </div>
          </a>
         </NextLink>
         <NextLink href="/contact" key="contact_navbar">
          <a onClick={() => close()} key="contact" className="mt-1 flex items-center rounded-lg p-3 transition duration-150 ease-in-out hover:bg-blue-50/80 dark:hover:bg-white/5">
           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
            <MailOpenIcon className="inline h-[24px] w-[24px] stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/[70%]" />
           </div>
           <div className="ml-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white">Contact me</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Do you have any questions? I always answer</p>
           </div>
          </a>
         </NextLink>
        </div>
        <div className="border-t-[1px] border-black/10 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#08152b]">
         <NextLink href={`https://github.com/${social.github.username}`} key="github_external">
          <a onClick={() => close()} target="_blank" className="group flow-root rounded-md p-3 transition duration-150 ease-in-out hover:bg-gray-100 dark:hover:bg-white/5 ">
           <span className="flex items-center">
            <span className="text-sm font-medium text-gray-900 dark:text-white">Github Profile</span>
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg">
             <ExternalLinkIcon className="h-4 w-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" />
            </div>
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
 );
}
