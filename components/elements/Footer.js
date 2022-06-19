import NextLink from "next/link";
import { config } from "@/config";
import { version } from "react";

export function Footer() {
 return (
  <footer className="mx-auto mb-8 mt-10 flex w-full max-w-2xl flex-col justify-center px-8 motion-reduce:transition-none">
   <hr className="border-1 mb-8 w-full border-gray-200 duration-300 motion-reduce:transition-none dark:border-gray-800" />
   <NextLink href="/">
    <a className="m-[0_auto] pb-2 text-center font-poppins font-semibold text-gray-600 dark:text-gray-400">
     <p>{config.footer.title}</p>
    </a>
   </NextLink>
   <span className="pb-6 text-center font-poppins text-base italic text-gray-600 dark:text-gray-500">
    Created with ❤️ in Poland using{" "}
    <NextLink href="https://reactjs.org">
     <a>React.js v{version}</a>
    </NextLink>
   </span>
   <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
    <div className="flex flex-col space-y-4">
     {config.footer.links.left.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a className=" group relative m-[0_auto] inline-block items-center justify-center pl-0 pr-0 text-center text-gray-500  duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 " href="#about">
        {item.title}
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block translate-x-1 opacity-0 duration-200 group-hover:translate-x-[10px] group-hover:opacity-100 motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
         <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
        </svg>
       </a>
      </NextLink>
     ))}
    </div>
    <div className="flex flex-col space-y-4">
     {config.footer.links.center.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a className="group relative m-[0_auto] inline-block items-center justify-center pl-0 pr-0 pb-1 text-center  text-gray-500 duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 " href="#about">
        {item.title}
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block translate-x-1 opacity-0 duration-200 group-hover:translate-x-[10px] group-hover:opacity-100 motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
         <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
        </svg>
       </a>
      </NextLink>
     ))}
    </div>
    <div className="flex flex-col space-y-4">
     {config.footer.links.right.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a className="group relative inline-block items-center justify-center pl-0 pr-0 pb-1 text-center  text-gray-500 duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 " href="#about">
        {item.title}
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block translate-x-1 opacity-0 duration-200 group-hover:translate-x-[10px] group-hover:opacity-100 motion-reduce:transition-none" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path>
         <path stroke="currentColor" d="M1.75 8H11" strokeWidth={2} strokeLinecap="round"></path>
        </svg>
       </a>
      </NextLink>
     ))}
    </div>
   </div>
  </footer>
 );
}
