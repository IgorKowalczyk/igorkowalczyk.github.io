"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Cog8ToothIcon, ArrowTopRightOnSquareIcon, SwatchIcon, CubeTransparentIcon, CursorArrowRaysIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Fragment, useState } from "react";
import { useEffect } from "react";
import { ButtonSecondary } from "@/components/Button";
import Select from "@/components/client/Select";
import Switch from "@/components/client/Switch";
import { meta } from "@/config";
import { cn } from "@/lib/utils";

export default function Settings() {
 const [isOpen, setIsOpen] = useState(false);
 const [glowEnabled, setGlowEnabled] = useState(true);
 const [decorationsEnabled, setDecorationsEnabled] = useState(true);
 const { resolvedTheme, setTheme } = useTheme();

 useEffect(() => {
  if (localStorage.getItem("glow") === "false") setGlowEnabled(false);
  if (localStorage.getItem("decorations") === "false") setDecorationsEnabled(false);
 }, []);

 function changeGlow() {
  localStorage.setItem("glow", !glowEnabled);
  window.dispatchEvent(new Event("glowEffect"));
  setGlowEnabled(!glowEnabled);
 }

 function changeDecorations() {
  localStorage.setItem("decorations", !decorationsEnabled);
  window.dispatchEvent(new Event("decorations"));
  setDecorationsEnabled(!decorationsEnabled);
 }

 return (
  <>
   <ButtonSecondary
    aria-label="Open settings"
    type="button"
    icon={false}
    onClick={() => setIsOpen(true)}
    className={cn(
     {
      "bg-blue-200 dark:bg-white/15": isOpen,
      "bg-gray-200 dark:bg-white/10": !isOpen,
     },
     "group !mt-0 ml-auto flex h-10 w-10 items-center justify-center px-2"
    )}
   >
    <Cog8ToothIcon
     className={cn(
      {
       "rotate-90 text-blue-800 dark:text-white": isOpen,
       "text-gray-800 dark:text-neutral-200": !isOpen,
      },
      "h-5 w-5 shrink-0 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-blue-800 motion-reduce:transition-none dark:group-hover:text-white"
     )}
    />
   </ButtonSecondary>
   <Transition.Root appear show={isOpen} as={Fragment}>
    <Dialog as="div" unmount="true" className="relative z-[99999]" onClose={() => setIsOpen(false)}>
     <Transition.Child as={Fragment} enter="ease-out duration-200 motion-reduce:transition-none" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200 motion-reduce:duration-[1ms]" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur firefox:bg-opacity-50" />
     </Transition.Child>
     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center">
       <Transition.Child as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:duration-[1ms]" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Dialog.Panel className="hide-scrollbar w-full max-w-md transform overflow-visible rounded-[10px] border border-black/15 bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-neutral-800 dark:bg-[#161617]">
         <Dialog.Title as="h3" className="text-xl/6 font-medium text-gray-900 duration-200 motion-reduce:transition-none dark:text-white">
          Settings
         </Dialog.Title>
         <p className="mt-2 text-base text-gray-500 dark:text-neutral-300">Here you can change your settings, like website theme or decorations. Changes will be saved automatically.</p>

         <div className="mt-2 divide-y divide-black/10 dark:divide-white/10">
          <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-gray-800 dark:text-white">
           <SwatchIcon className="mr-2 size-5 text-gray-800/80 dark:text-neutral-300/50" />
           Theme
           <div className="ml-auto w-32">
            <Select
             text={
              <>
               {resolvedTheme === "dark" ? (
                <>
                 <MoonIcon className="mr-1 size-5" />
                 <span>Dark</span>
                </>
               ) : (
                <>
                 <SunIcon className="mr-1 size-5" />
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
                 <ComputerDesktopIcon className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
                 <span>System</span>
                </>
               ),
              },
              {
               value: "dark",
               disabled: resolvedTheme === "dark",
               text: (
                <>
                 <MoonIcon className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
                 <span>Dark</span>
                </>
               ),
              },
              {
               value: "light",
               disabled: resolvedTheme === "light",
               text: (
                <>
                 <SunIcon className="mx-2 size-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-neutral-200" />
                 <span>Light</span>
                </>
               ),
              },
             ]}
            />
           </div>
          </div>
          <div className="mt-2">
           <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-gray-800 dark:text-white">
            <CursorArrowRaysIcon className="mr-2 size-5 text-gray-800/80 dark:text-neutral-300/50" />
            Glow effect
            <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm italic text-gray-800/50 dark:text-neutral-300/50">
             <Switch enabled={glowEnabled} onChange={() => changeGlow()} />
            </div>
           </div>
           <div className="flex w-full select-none items-center py-3 text-base text-gray-800 dark:text-white">
            <CubeTransparentIcon className="mr-2 size-5 text-gray-800/80 dark:text-neutral-300/50" />
            Display Decorations
            <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm italic text-gray-800/50 dark:text-neutral-300/50">
             <Switch enabled={decorationsEnabled} onChange={() => changeDecorations()} />
            </div>
           </div>
          </div>
         </div>
         <div className="mt-4 flex items-center">
          <Link target="_blank" rel="noreferrer" href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}`} className="full group flex items-start rounded-md px-2 py-3 text-sm text-gray-800 duration-200 motion-reduce:transition-none dark:text-white">
           Source code <ArrowTopRightOnSquareIcon className="ml-2 size-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" />
          </Link>

          <ButtonSecondary className="ml-auto mt-0" onClick={() => setIsOpen(false)}>
           Close
          </ButtonSecondary>
         </div>
        </Dialog.Panel>
       </Transition.Child>
      </div>
     </div>
    </Dialog>
   </Transition.Root>
  </>
 );
}
