import dynamic from "next/dynamic";
import { config } from "@/config";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const ThemeSwitch = dynamic(() => import("./ThemeSwitch"));

export default function Settings(props) {
 const [isOpen, setIsOpen] = useState(false);
 return (
  <div {...props}>
   {" "}
   <button aria-label="Open settings" type="button" onClick={() => setIsOpen(true)} className={`${isOpen ? "bg-blue-200 dark:bg-white/[15%]" : ""} group ml-4 mr-[1.4rem] flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/10 dark:hover:bg-white/[15%]`}>
    <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? "rotate-90 text-blue-800 dark:text-white" : ""} h-5 w-5 text-gray-800 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-blue-800 motion-reduce:transition-none dark:text-gray-200 dark:group-hover:text-white`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
   </button>
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
          <p className="text-sm text-gray-500 dark:text-slate-300">Here you can change your settings, e.g. website theme. Changes will be saved automatically.</p>
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
