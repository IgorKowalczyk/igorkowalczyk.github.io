import { Listbox, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, DesktopComputerIcon, SelectorIcon } from "@heroicons/react/outline";

export default function ThemeSwitch(props) {
 const { resolvedTheme, setTheme } = useTheme();
 return (
  <Listbox name="Theme switch" value={resolvedTheme} unmount={true} onChange={(t) => setTheme(t)} {...props}>
   <div className="relative">
    <Listbox.Button aria-label="Change theme" className="relative w-full cursor-pointer rounded-lg border-[1px] border-black/[10%] text-left text-gray-700 duration-200 hover:border-black/30 hover:text-gray-800 motion-reduce:transition-none  dark:border-white/[15%] dark:text-gray-200/75 dark:hover:border-white/25 dark:hover:text-gray-200 sm:text-sm">
     <span className="flex truncate py-2 pl-2 pr-10">
      {resolvedTheme === "dark" ? (
       <>
        <MoonIcon className="mr-1 h-5 w-5 duration-200 motion-reduce:transition-none" />
        <span>Dark</span>
       </>
      ) : (
       <>
        <SunIcon className="mr-1 h-5 w-5 duration-200 motion-reduce:transition-none" />
        <span>Light</span>
       </>
      )}
     </span>
     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 opacity-70">
      <SelectorIcon className="h-5 w-5 duration-200 motion-reduce:transition-none" />
     </span>
    </Listbox.Button>
    <Transition enter="transition duration-200 ease-out" enterFrom="transform scale-95 opacity-0" enterTo="transform scale-100 opacity-100" leave="transition duration-200 ease-out" leaveFrom="transform scale-100 opacity-100" leaveTo="transform scale-95 opacity-0">
     <Listbox.Options className="absolute z-[100] mt-1 max-h-60 w-full overflow-auto rounded-md border-[1px] border-black/[10%] bg-white bg-opacity-70 py-1 text-base shadow-2xl backdrop-blur-[9px] duration-200 firefox:bg-opacity-100 motion-reduce:duration-200 dark:border-white/[15%] dark:bg-[#08152b] dark:bg-opacity-[85%] dark:firefox:bg-opacity-100 sm:text-sm">
      <Listbox.Option key="system" className="relative flex cursor-pointer select-none truncate py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"system"}>
       <DesktopComputerIcon className="mx-2 h-5 w-5 text-gray-800 duration-200  motion-reduce:duration-200 dark:text-gray-200" />
       System
      </Listbox.Option>
      <Listbox.Option key="dark" className="relative flex cursor-pointer select-none truncate py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"dark"}>
       <MoonIcon className="mx-2 h-5 w-5 text-gray-800 duration-200  motion-reduce:duration-200 dark:text-gray-200" />
       Dark
      </Listbox.Option>
      <Listbox.Option key="light" className="relative flex cursor-pointer select-none truncate  py-2 text-left text-black duration-200 hover:bg-black/10 motion-reduce:transition-none dark:text-white dark:hover:bg-white/10" value={"light"}>
       <SunIcon className="mx-2 h-5 w-5 text-gray-800 duration-200  motion-reduce:duration-200 dark:text-gray-200" />
       Light
      </Listbox.Option>
     </Listbox.Options>
    </Transition>
   </div>
  </Listbox>
 );
}
