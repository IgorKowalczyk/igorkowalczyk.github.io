"use client";

import { Dialog, DialogPanel, DialogTitle, DialogBackdrop } from "@headlessui/react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";
import { Icons } from "../Icons";
import { ButtonSecondary } from "@/components/Button";
import Select from "@/components/client/Select";
import Switch from "@/components/client/Switch";
import { meta } from "@/config";
import { cn } from "@/lib/utils";

export default function Settings() {
 const [isOpen, setIsOpen] = useState(false);
 const [decorationsEnabled, setDecorationsEnabled] = useState(true);
 const { resolvedTheme, setTheme } = useTheme();

 useEffect(() => {
  if (localStorage.getItem("decorations") === "false") setDecorationsEnabled(false);
 }, []);

 return (
  <>
   <ButtonSecondary
    aria-label="Open settings"
    type="button"
    icon={false}
    onClick={() => setIsOpen(true)}
    className={cn(
     {
      "!bg-gray-300 dark:!bg-white/15": isOpen,
      "!bg-transparent hover:!bg-gray-300 dark:hover:!bg-white/15": !isOpen,
     },
     "group !outline-none ml-auto flex h-10 w-10 items-center justify-center px-2"
    )}
   >
    <Icons.Settings
     className={cn(
      {
       "rotate-90 text-blue-800 dark:text-white": isOpen,
       "text-gray-800 dark:text-neutral-200": !isOpen,
      },
      "h-5 w-5 shrink-0 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-blue-800 motion-reduce:transition-none dark:group-hover:text-white"
     )}
    />
   </ButtonSecondary>
   <Dialog transition open={isOpen} as="div" className="fixed inset-0 z-50 ease-out focus:outline-none" onClose={() => setIsOpen(false)}>
    <DialogBackdrop transition className="fixed inset-0 bg-black/50 duration-200 data-[closed]:opacity-0 motion-reduce:transition-none dark:bg-[#161617]/70" />
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
     <div className="flex min-h-full items-center justify-center p-4">
      <DialogPanel transition className="backdrop-blur-xl hide-scrollbar w-full max-w-md transform overflow-visible rounded-[10px] border border-black/15 bg-white/70 p-6 text-left align-middle shadow-lg transition-all duration-200 data-[closed]:scale-95 data-[closed]:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]/70">
       <DialogTitle as="h3" className="text-xl/6 font-medium text-gray-900 duration-200 motion-reduce:transition-none dark:text-white">
        Settings
       </DialogTitle>
       <p className="mt-2 text-base text-gray-500 dark:text-neutral-300">Here you can change your settings, like website theme or decorations. Changes will be saved automatically.</p>

       <div className="mt-2 divide-y divide-black/10 dark:divide-white/10">
        <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-gray-800 dark:text-white">
         <Icons.SunMoon className="mr-2 size-5 text-gray-800/80 dark:text-neutral-300/50" />
         Theme
         <div className="ml-auto w-32">
          <Select
           text={
            <>
             {resolvedTheme === "dark" ? (
              <>
               <Icons.Moon className="mr-1 size-5" />
               <span>Dark</span>
              </>
             ) : (
              <>
               <Icons.Sun className="mr-1 size-5" />
               <span>Light</span>
              </>
             )}
            </>
           }
           value={resolvedTheme}
           onChange={(e) => setTheme(e)}
           options={[
            {
             value: "system",
             text: (
              <>
               <Icons.Laptop className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
               <span>System</span>
              </>
             ),
            },
            {
             value: "dark",
             disabled: resolvedTheme === "dark",
             text: (
              <>
               <Icons.Moon className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
               <span>Dark</span>
              </>
             ),
            },
            {
             value: "light",
             disabled: resolvedTheme === "light",
             text: (
              <>
               <Icons.Sun className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
               <span>Light</span>
              </>
             ),
            },
           ]}
          />
         </div>
        </div>
        <div className="mt-2">
         <div className="flex w-full select-none items-center py-3 text-base text-gray-800 dark:text-white">
          <Icons.Sparkles className="mr-2 size-5 text-gray-800/80 dark:text-neutral-300/50" />
          Display Decorations
          <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm italic text-gray-800/50 dark:text-neutral-300/50">
           <Switch
            enabled={decorationsEnabled}
            onChange={() => {
             localStorage.setItem("decorations", !decorationsEnabled);
             window.dispatchEvent(new Event("decorations"));
             setDecorationsEnabled(!decorationsEnabled);
            }}
           />
          </div>
         </div>
        </div>
       </div>
       <div className="mt-4 flex items-center">
        <Link target="_blank" rel="noreferrer" href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}`} className="full group flex items-start rounded-md px-2 py-3 text-sm text-gray-800 duration-200 motion-reduce:transition-none dark:text-white">
         Source code <Icons.ExternalLink className="ml-2 size-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" />
        </Link>

        <ButtonSecondary className="ml-auto" onClick={() => setIsOpen(false)}>
         Close
        </ButtonSecondary>
       </div>
      </DialogPanel>
     </div>
    </div>
   </Dialog>
  </>
 );
}
