"use client";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption, ListboxProps } from "@headlessui/react";
import { Icons } from "../Icons";

export interface SelectProps extends ListboxProps {
 value: string;
 options: { value: string; text: React.ReactNode; disabled?: boolean }[];
 text: React.ReactNode;
}

export default function Select({ value, onChange, options, text, ...props }: SelectProps) {
 return (
  <Listbox value={value} onChange={(t) => onChange?.(t)} {...props}>
   <ListboxButton className="relative w-full cursor-pointer rounded-lg border border-black/10 text-left text-neutral-700 duration-200 hover:border-black/30 hover:text-neutral-800 motion-reduce:transition-none dark:border-neutral-800 dark:text-neutral-200/75 dark:hover:border-neutral-800 dark:hover:text-neutral-200 sm:text-sm">
    <span className="flex truncate py-2 pl-2 pr-10">{text}</span>
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70 duration-200 motion-reduce:transition-none">
     <Icons.ChevronsUpDown className="size-4 shrink-0" />
    </span>
   </ListboxButton>
   <ListboxOptions className="absolute z-50 mt-1 max-h-60 w-[var(--button-width)] origin-top overflow-auto rounded-md border border-black/10 bg-white/90 py-1 text-base shadow-lg backdrop-blur duration-100 ease-in data-[closed]:scale-95 data-[closed]:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]/90 sm:text-sm">
    {options.map((option) => (
     <ListboxOption key={option.value} value={option.value} disabled={option.disabled} className="relative flex select-none truncate py-2 text-left text-neutral-800 duration-200 data-[focus]:bg-black/10 data-[disabled]:opacity-50 motion-reduce:transition-none dark:text-white data-[focus]:dark:bg-white/10">
      {option.text}
     </ListboxOption>
    ))}
   </ListboxOptions>
  </Listbox>
 );
}
