"use client";

import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

export default function Select({ value, onChange, options, text, ...props }) {
 return (
  <Listbox name="Select Menu" value={value} unmount={true} onChange={(t) => onChange(t)} {...props}>
   <div className="relative">
    <Listbox.Button aria-label="Change" className="relative w-full cursor-pointer rounded-lg border-[1px] border-black/[10%] text-left text-gray-700 duration-200 hover:border-black/30 hover:text-gray-800 motion-reduce:transition-none  dark:border-neutral-800 dark:text-gray-200/75 dark:hover:border-neutral-800 dark:hover:text-gray-200 sm:text-sm">
     <span className="flex truncate py-2 pl-2 pr-10">{text}</span>
     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70 duration-200 motion-reduce:transition-none">
      <ChevronUpDownIcon className="h-5 w-5" />
     </span>
    </Listbox.Button>
    <Transition enter="transition duration-200 motion-reduce:duration-[1ms] ease-out" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-200 motion-reduce:duration-[1ms] ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0" className={"relative z-[100]"}>
     <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md border-[1px] border-black/[10%] bg-white bg-opacity-70 py-1 text-base shadow-2xl backdrop-blur-[9px] duration-200 firefox:bg-opacity-100 motion-reduce:duration-[1ms] dark:border-neutral-800 dark:bg-[#161617] dark:bg-opacity-[85%] dark:firefox:bg-opacity-100 sm:text-sm">
      {options.map((option) => (
       <Listbox.Option key={option.value} value={option.value} disabled={option.disabled} className={({ active }) => `${option.disabled ? "pointer-events-none cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-black/10 dark:hover:bg-white/10"} ${active ? "bg-black/10 dark:bg-white/10" : ""} relative flex select-none truncate py-2 text-left text-zinc-800 duration-200 motion-reduce:transition-none dark:text-white`}>
        {option.text}
       </Listbox.Option>
      ))}
     </Listbox.Options>
    </Transition>
   </div>
  </Listbox>
 );
}
