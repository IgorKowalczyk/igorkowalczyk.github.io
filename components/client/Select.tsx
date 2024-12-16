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
   <ListboxButton className="relative flex w-full cursor-pointer rounded-md border border-black/10 p-2 text-left text-neutral-700 duration-200 hover:border-black/30 hover:text-neutral-800 motion-reduce:transition-none dark:border-neutral-800 dark:text-neutral-200/75 dark:hover:border-neutral-800 dark:hover:text-neutral-200 sm:text-sm">
    <span className="flex truncate">{text}</span>
    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center opacity-70">
     <Icons.ChevronsUpDown className="size-4 shrink-0" />
    </span>
   </ListboxButton>
   <ListboxOptions transition className="absolute z-50 mt-2 max-h-60 w-[calc(var(--button-width)_+_6px)] origin-top-left overflow-auto rounded-md border border-black/10 bg-white p-1 text-base shadow-2xl !outline-none duration-200 ease-in-out data-[closed]:scale-95 data-[closed]:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] sm:text-sm">
    {options.map((option) => (
     <ListboxOption key={option.value} value={option.value} disabled={option.disabled} className="relative flex cursor-pointer select-none truncate rounded py-2 text-left text-neutral-800 duration-200 data-[focus]:bg-black/10 data-[disabled]:opacity-50 motion-reduce:transition-none dark:text-white data-[focus]:dark:bg-white/10">
      {option.text}
     </ListboxOption>
    ))}
   </ListboxOptions>
  </Listbox>
 );
}
