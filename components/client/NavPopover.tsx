"use client";

import { Transition, Popover, PopoverButton, PopoverPanel, PopoverProps } from "@headlessui/react";
import Link from "next/link";
import { Icons } from "../Icons";
import { meta } from "@/config";

export default function NavPopover(props: PopoverProps) {
 return (
  <Popover {...props}>
   <>
    <PopoverButton className="group relative hidden rounded-lg p-1 text-neutral-700 transition-all duration-200 hover:bg-black/10 hover:text-neutral-800 ui-open:bg-black/10 ui-open:text-neutral-800 motion-reduce:transition-none dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-neutral-200 dark:ui-open:bg-white/10 dark:ui-open:text-neutral-200 sm:px-3 sm:py-2 md:flex md:items-center">
     <span>More</span>
     <Icons.ChevronRight className="ml-1 size-4 text-neutral-700 duration-150 ease-in-out group-hover:rotate-90 group-hover:text-neutral-800 ui-open:rotate-90 ui-open:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-400 dark:ui-open:text-neutral-200" />
    </PopoverButton>
    <Transition enter="transition ease-out duration-100 motion-reduce:transition-none" enterFrom="transform opacity-0 duration-100 scale-95 motion-reduce:transition-none" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:transition-none" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
     <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform rounded-xl border border-black/10 bg-white/90 p-2 opacity-100 shadow-lg backdrop-blur-xl duration-100 dark:border-neutral-800 dark:bg-[#161617]/70">
      <Link target="_blank" href={`https://github.com/${meta.accounts.github.username}`} className="flex items-center rounded-md p-3 transition hover:bg-black/10 dark:hover:bg-white/5">
       <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white dark:bg-white/10 dark:text-neutral-800 sm:size-12">
        <Icons.Github className="inline size-6 fill-black stroke-2 duration-200 motion-reduce:transition-none dark:fill-white/70" />
       </div>
       <div className="ml-4">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">My Github Profile</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Explore my projects and contributions on GitHub.</p>
       </div>
      </Link>
      <Link href="/photography" className="mt-1 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-black/10 dark:hover:bg-white/5">
       <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white dark:bg-white/10 dark:text-neutral-800 sm:size-12">
        <Icons.Images className="inline size-6 stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70" />
       </div>
       <div className="ml-4">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">Photography Portfolio</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">View my collection of photographs and visual art.</p>
       </div>
      </Link>
      <Link href="/contact" className="mt-1 flex items-center rounded-md p-3 transition duration-150 ease-in-out hover:bg-black/10 dark:hover:bg-white/5">
       <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white dark:bg-white/10 dark:text-neutral-800 sm:size-12">
        <Icons.Send className="inline size-6 stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70" />
       </div>
       <div className="ml-4">
        <p className="text-sm font-medium text-neutral-900 dark:text-white">Contact Me</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Have any questions? Feel free to reach out to me.</p>
       </div>
      </Link>
     </PopoverPanel>
    </Transition>
   </>
  </Popover>
 );
}
