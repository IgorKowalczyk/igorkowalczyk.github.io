"use client";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { Icons } from "../Icons";

export default function Select({ value, onChange, options, text, ...props }) {
 return (
  <Listbox name="Select Menu" value={value} unmount={true} onChange={(t) => onChange(t)} {...props}>
   <ListboxButton className="relative w-full cursor-pointer rounded-lg border border-black/10 text-left text-gray-700 duration-200 hover:border-black/30 hover:text-gray-800 motion-reduce:transition-none dark:border-neutral-800 dark:text-neutral-200/75 dark:hover:border-neutral-800 dark:hover:text-neutral-200 sm:text-sm">
    <span className="flex truncate py-2 pl-2 pr-10">{text}</span>
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70 duration-200 motion-reduce:transition-none">
     <Icons.ChevronsUpDown className="size-4 shrink-0" />
    </span>
   </ListboxButton>
   <ListboxOptions anchor="bottom" transition className="absolute z-50 mt-1 max-h-60 w-[var(--button-width)] origin-top overflow-auto rounded-md border border-black/10 bg-white/70 py-1 text-base shadow-lg backdrop-blur-[9px] duration-100 ease-in data-[closed]:scale-95 data-[closed]:opacity-0 motion-reduce:duration-[1ms] dark:border-neutral-800 dark:bg-[#161617]/90 sm:text-sm">
    {options.map((option) => (
     <ListboxOption key={option.value} value={option.value} disabled={option.disabled} className="relative flex select-none truncate py-2 text-left text-gray-800 duration-200 data-[focus]:bg-black/10 data-[disabled]:opacity-50 motion-reduce:transition-none dark:text-white data-[focus]:dark:bg-white/10">
      {option.text}
     </ListboxOption>
    ))}
   </ListboxOptions>
  </Listbox>
 );
}
