import { Listbox, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { Fragment } from "react";

export default function ThemeSwitch(props) {
 const { resolvedTheme, setTheme } = useTheme();
 return (
  <Listbox name="Theme switch" value={resolvedTheme} unmount={true} onChange={(t) => setTheme(t)} {...props}>
    <div className="relative">
     <Listbox.Button as={"div"} className="relative w-full cursor-pointer rounded-lg border-[1px] border-black/[10%] text-left text-gray-700 duration-200 hover:border-black/30 hover:text-gray-800 motion-reduce:transition-none  dark:border-white/[15%] dark:text-gray-200/75 dark:hover:border-white/25 dark:hover:text-gray-200 sm:text-sm">
      <span className="flex truncate py-2 pl-2 pr-10">
       {resolvedTheme === "dark" ? (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-1 h-5 w-5 duration-200 motion-reduce:transition-none">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
         </svg>
         <span>Dark</span>
        </>
       ) : (
        <>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mr-1 h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
         </svg>
         <span>Light</span>
        </>
       )}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
       </svg>
      </span>
     </Listbox.Button>
     <Transition enter="transition duration-200 ease-out" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-200 ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
      <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md border-[1px] border-black/[10%] bg-white bg-opacity-70 py-1 text-base shadow-2xl backdrop-blur-[9px] duration-200 firefox:bg-opacity-100 motion-reduce:duration-200 dark:border-white/[15%] dark:bg-[#08152b] dark:bg-opacity-[85%] dark:firefox:bg-opacity-100 sm:text-sm">
       <Listbox.Option key="system" className="group relative flex cursor-pointer select-none truncate py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"system"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-safe:group-hover:scale-95 motion-reduce:duration-200 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        System
       </Listbox.Option>
       <Listbox.Option key="dark" className="group relative flex cursor-pointer select-none truncate py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"dark"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-safe:group-hover:scale-95 motion-reduce:duration-200 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        Dark
       </Listbox.Option>
       <Listbox.Option key="light" className="group flex cursor-pointer select-none truncate  py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"light"}>
        <svg xmlns="http://www.w3.org/2000/svg" className="mx-2 h-5 w-5 text-gray-800 duration-200 motion-safe:group-hover:scale-95 motion-reduce:duration-200 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        Light
       </Listbox.Option>
      </Listbox.Options>
     </Transition>
    </div>
  </Listbox>
 );
}
