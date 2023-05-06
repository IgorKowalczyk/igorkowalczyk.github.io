"use client";

import Link from "next/link";

export default function Button(props) {
 if (props.href) {
  return (
   <Link href={props.href} {...props} className="group mt-2 flex w-fit rounded-md border border-transparent bg-blue-100 px-4 py-2  text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
    {props.children}
    <svg className="ml-2 mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
   </Link>
  );
 } else {
  return (
   <button className="group mt-2 flex w-fit rounded-md border border-transparent bg-blue-100 px-4 py-2  text-sm font-medium text-blue-900 duration-200 hover:bg-blue-200 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
    {props.children}
    <svg className="ml-2 mt-[2px] h-4 w-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
   </button>
  );
 }
}
