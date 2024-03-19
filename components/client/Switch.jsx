"use client";

import { Switch as HeadlessSwitch } from "@headlessui/react";
import { cn } from "@/lib/utils";

export default function Switch({ enabled, onChange }) {
 return (
  <HeadlessSwitch checked={enabled} onChange={() => onChange()} className="relative inline-flex h-[30px] w-[50px] shrink-0 cursor-pointer items-center rounded-lg border-[1px] border-black/10 text-left text-gray-700 ring-0 transition-colors duration-200 ease-in-out hover:border-black/30 hover:text-gray-800 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 motion-reduce:transition-none dark:border-neutral-800 dark:text-neutral-200/75 dark:hover:border-neutral-800 dark:hover:text-neutral-200">
   <span className="sr-only">Use setting</span>
   <span
    aria-hidden="true"
    className={cn(
     {
      "translate-x-[25px] bg-gray-700": enabled,
      "translate-x-[5px]": !enabled,
     },
     "pointer-events-none mb-px inline-block h-[20px] w-[20px] transform rounded-lg bg-gray-400 !ring-0 transition ease-in-out dark:bg-neutral-200"
    )}
   />
  </HeadlessSwitch>
 );
}
