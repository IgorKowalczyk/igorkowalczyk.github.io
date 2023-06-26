"use client";

import { meta } from "/config";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { Cog8ToothIcon, ArrowTopRightOnSquareIcon, SwatchIcon, CubeTransparentIcon, CursorArrowRaysIcon, SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Select from "./Select";
import Switch from "./Switch";
import clsx from "clsx";

export default function Settings(props) {
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
  <div {...props}>
   <button
    aria-label="Open settings"
    type="button"
    onClick={() => setIsOpen(true)}
    className={clsx(
     {
      "bg-blue-200 dark:bg-white/[15%]": isOpen,
      "bg-gray-200 dark:bg-white/10": !isOpen,
     },
     "group mr-[1rem] flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 hover:bg-blue-200 motion-reduce:transition-none dark:hover:bg-white/[15%]"
    )}
   >
    <Cog8ToothIcon
     className={clsx(
      {
       "rotate-90 text-blue-800 dark:text-white": isOpen,
       "text-gray-800 dark:text-gray-200": !isOpen,
      },
      "h-5 w-5 duration-200 group-hover:rotate-90 group-hover:transform group-hover:text-blue-800 motion-reduce:transition-none dark:group-hover:text-white"
     )}
    />
   </button>
   <Transition.Root appear show={isOpen} as={Fragment}>
    <Dialog as="div" unmount="true" className="relative z-[99999]" onClose={() => setIsOpen(false)}>
     <Transition.Child as={Fragment} enter="ease-out duration-200 motion-reduce:transition-none" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200 motion-reduce:duration-[1ms]" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur firefox:bg-opacity-50" />
     </Transition.Child>
     <div className="fixed inset-0 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center ">
       <Transition.Child as={Fragment} enter="transition ease-out duration-200 motion-reduce:transition-none" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-100 motion-reduce:duration-[1ms]" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Dialog.Panel className="hide-scrollbar w-full max-w-md transform overflow-visible rounded-[10px] border-[1px] border-black/[15%] bg-white p-6 text-left align-middle shadow-xl transition-all dark:border-neutral-800 dark:bg-[#161617]">
         <Dialog.Title as="h3" className="text-xl/6 font-medium text-gray-900 duration-200 motion-reduce:transition-none dark:text-white">
          Settings
         </Dialog.Title>
         <div className="mt-2">
          <p className="text-base text-gray-500 dark:text-slate-300">Here you can change your settings, e.g. website theme. Changes will be saved automatically.</p>
         </div>
         <div className="mt-2 divide-y divide-black/10 dark:divide-white/10">
          <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-zinc-800 dark:text-white">
           <SwatchIcon className="mr-2 h-5 w-5 text-zinc-800/80 dark:text-slate-300/50" />
           Theme
           <div className="ml-auto w-32">
            <Select
             text={
              <>
               {resolvedTheme === "dark" ? (
                <>
                 <MoonIcon className="mr-1 h-5 w-5" />
                 <span>Dark</span>
                </>
               ) : (
                <>
                 <SunIcon className="mr-1 h-5 w-5" />
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
                 <ComputerDesktopIcon className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-gray-200" />
                 <span>System</span>
                </>
               ),
              },
              {
               value: "dark",
               disabled: resolvedTheme === "dark",
               text: (
                <>
                 <MoonIcon className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-gray-200" />
                 <span>Dark</span>
                </>
               ),
              },
              {
               value: "light",
               disabled: resolvedTheme === "light",
               text: (
                <>
                 <SunIcon className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-reduce:transition-none dark:text-gray-200" />
                 <span>Light</span>
                </>
               ),
              },
             ]}
            />
           </div>
          </div>
          <div className="flex w-full cursor-auto select-none items-center py-3 text-base text-zinc-800 dark:text-white">
           <CursorArrowRaysIcon className="mr-2 h-5 w-5 text-zinc-800/80 dark:text-slate-300/50" />
           Glow effect
           <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm italic text-zinc-800/50 dark:text-slate-300/50">
            <span className="mt-1">Off</span>
            <Switch enabled={glowEnabled} onChange={() => changeGlow()} />
            <span className="mt-1">On</span>
           </div>
          </div>
          <div className="flex w-full select-none items-center py-3 text-base text-zinc-800 dark:text-white">
           <CubeTransparentIcon className="mr-2 h-5 w-5 text-zinc-800/80 dark:text-slate-300/50" />
           Display Decorations
           <div className="ml-auto flex w-32 items-center justify-end gap-2 text-sm italic text-zinc-800/50 dark:text-slate-300/50">
            <span className="mt-1">Off</span>
            <Switch enabled={decorationsEnabled} onChange={() => changeDecorations()} />
            <span className="mt-1">On</span>
           </div>
          </div>
         </div>
         <div className="mt-4 flex items-center">
          <a target="_blank" rel="noreferrer" href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}`} className="full group flex items-start rounded-md px-2 py-3 text-sm text-zinc-800 duration-200 motion-reduce:transition-none dark:text-white">
           Source code <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4 opacity-50 duration-100 group-hover:opacity-90 motion-reduce:transition-none" />
          </a>
          <button type="button" className="group my-2 ml-auto flex rounded-md border border-transparent bg-blue-100 px-4 py-2  text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" onClick={() => setIsOpen(false)}>
           Close{" "}
           <svg className="ml-2 mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
           </svg>
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
