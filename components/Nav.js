import { config } from "@/config";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition, Popover } from "@headlessui/react";
import { MobileNav } from "@components/MobileNav";
import { ThemeSwitch } from "./ThemeSwitch";
import NextLink from "next/link";

function NavItem({ href, text, target }) {
 const router = useRouter();
 const isActive = router.asPath.split("#")[0] === href.split("#")[0];
 return (
  <NextLink href={href} key={href}>
   <a target={target} key={href} className={`${isActive ? "font-semibold text-gray-800 dark:text-gray-200" : "font-normal text-gray-600 dark:text-gray-400"} hidden rounded-lg p-1 transition-all duration-200 hover:bg-gray-200 motion-reduce:transition-none dark:hover:bg-white/10 sm:px-3 sm:py-2 md:inline-block`}>
    <span>{text}</span>
   </a>
  </NextLink>
 );
}

export function Nav() {
 const [isOpen, setIsOpen] = useState(false);
 const [isPopoverShowing, setIsPopoverShowing] = useState(false);

 return (
  <div className="fixed top-0 z-[100] mx-0 mt-0 w-full font-poppins shadow dark:shadow-2xl">
   <nav key="nav" className="relative mx-auto flex h-[73px] w-full items-center justify-between border-b-[1px] border-white/[15%] bg-white bg-opacity-70 pt-4 pb-4 duration-300 firefox:bg-opacity-100 motion-reduce:transition-none dark:bg-[#08152b] dark:bg-opacity-70 dark:firefox:bg-opacity-100">
    <div className="fixed inset-0 z-[-1] h-[inherit] w-full backdrop-blur-[9px]"></div>
    <NextLink href="/" key="main_page">
     <a>
      <h1 className=" z-[1001] mx-8 font-poppins text-lg font-bold text-black duration-300 motion-reduce:transition-none dark:text-white">Igor Kowalczyk</h1>
     </a>
    </NextLink>
    <MobileNav />
    <Popover className="relative">
      <>
       <Popover.Button onMouseEnter={() => setIsPopoverShowing(true)} onMouseLeave={() => setIsPopoverShowing(false)} onClick={() => null} className={`${isPopoverShowing ? "bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-gray-200" : ""} group hidden rounded-lg p-1 font-poppins text-gray-600 outline-none transition-all duration-200 hover:bg-gray-200 hover:text-gray-800 motion-reduce:transition-none dark:text-gray-400 dark:hover:bg-white/10 sm:px-3 sm:py-2 md:flex md:items-center`}>
        <span>My work</span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`${isPopoverShowing ? "-rotate-90" : ""} ml-1 h-4 w-4 text-gray-600 duration-150 ease-in-out group-hover:-rotate-90`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
       </Popover.Button>
       <Transition show={isPopoverShowing} onMouseEnter={() => setIsPopoverShowing(true)} onMouseLeave={() => setIsPopoverShowing(false)} as={Fragment} enter="transition ease-out duration-200" enterFrom="opacity-0 translate-y-1" enterTo="opacity-100 translate-y-0" leave="transition ease-in duration-200" leaveFrom="opacity-100 translate-y-0" leaveTo="opacity-0 translate-y-1">
        <Popover.Panel className=" absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
         <div className="overflow-hidden rounded-lg border-[1px] border-black/[10%] shadow-lg  dark:border-white/[15%]">
          <div className="relative bg-white p-7 dark:bg-[#08152b]">
           <a key="solutions" href="/github" className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out dark:hover:bg-white/5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-white dark:bg-white/10 dark:text-black sm:h-12 sm:w-12">
             <svg fill="currentColor" className="inline h-[24px] w-[24px] fill-black duration-200 motion-reduce:transition-none dark:fill-white/[70%]">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
             </svg>
            </div>
            <div className="ml-4">
             <p className="text-sm font-medium text-gray-900 dark:text-white">My projects</p>
             <p className="text-sm text-gray-500 dark:text-gray-400">Web development, Discord Bots, and more</p>
            </div>
           </a>
          </div>
          <div className="bg-white px-5 py-4 dark:bg-[#08152b]">
           <a href="https://github.com/igorkowalczyk" className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none dark:hover:bg-white/5 ">
            <span className="flex items-center">
             <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-[24px] w-[24px] duration-200 motion-reduce:transition-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
             </div>
             <span className="text-sm font-medium text-gray-900 dark:text-white">Github Profile</span>
            </span>

            <span className="block text-sm text-gray-500 dark:text-gray-400">See all of my work</span>
           </a>
          </div>
         </div>
        </Popover.Panel>
       </Transition>
      </>
    </Popover>
    <div className="mr-auto">
     {config.nav.left.map((item, index) => {
      return <NavItem href={item.href} text={item.title} target={item.target} key={index} />;
     })}
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
    
    <div className="text-right">
     <button aria-label="Open settings" type="button" onClick={() => setIsOpen(true)} className={`${isOpen ? "bg-blue-200 dark:bg-white/[15%]" : ""} group ml-4 mr-[1.4rem] flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/10 dark:hover:bg-white/[15%]`}>
      <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? "rotate-90 text-blue-800 dark:text-white" : ""} h-5 w-5 text-gray-800 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-blue-800 motion-reduce:transition-none dark:text-gray-200 dark:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
       <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
       <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
     </button>
    </div>
   </nav>

   <Transition.Root appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-[99999]" onClose={() => setIsOpen(false)}>
     <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[4px] firefox:bg-opacity-50" />
     </Transition.Child>
     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center font-poppins">
       <Transition.Child as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Dialog.Panel className="hide-scrollbar w-full max-w-md transform overflow-visible rounded-[10px] border-[1px] border-black/[15%] bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-white/[15%] dark:bg-[#08152b]">
         <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 duration-200 motion-reduce:transition-none dark:text-white">
          Settings
         </Dialog.Title>
         <div className="mt-2">
          <p className="text-sm text-gray-500 dark:text-slate-300">Here you can change settings such as theme and motion reduce. Your settings will be saved automatically.</p>
         </div>
         <div className="mt-2 divide-y divide-black/20 dark:divide-white/20">
          <button className="flex w-full cursor-auto select-text items-center py-3 text-sm text-black dark:text-white">
           Theme
           <div className="ml-auto w-32">
            <ThemeSwitch />
           </div>
          </button>
         </div>
         <div className="mt-4 flex">
          <a target="_blank" rel="noreferrer" href={`https://github.com/${config.social.github.username}/${config.social.github.repo}`} className="full group flex items-center rounded-md px-2 py-3 text-sm text-black duration-200 motion-reduce:transition-none dark:text-white">
           Source code{" "}
           <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
           </svg>
          </a>
          <button type="button" className="ml-auto rounded-md border border-transparent bg-blue-100 px-4 py-2 font-poppins text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" onClick={() => setIsOpen(false)}>
           Close
          </button>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition.Root>
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
