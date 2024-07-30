import Link from "next/link";
import { cn } from "@/lib/utils";

export function ButtonSecondary({ href, children, icon = true, ...props }) {
 if (href) {
  return (
   <Link href={href} {...props} className={cn("group mt-2 flex w-fit items-center rounded-md bg-gray-200 px-4 py-2 font-medium text-blue-900 duration-200 hover:bg-gray-300 motion-reduce:transition-none dark:bg-white/10 dark:text-white dark:hover:bg-white/15", props.className)}>
    {children}
    {icon && (
     <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
     </svg>
    )}
   </Link>
  );
 } else {
  return (
   <button {...props} className={cn("group mt-2 flex w-fit items-center rounded-md bg-gray-200 px-4 py-2 font-medium text-blue-900 duration-200 hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none dark:bg-white/10 dark:text-white dark:hover:bg-white/15", props.className)} type="button">
    {children}
    {icon && (
     <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
     </svg>
    )}
   </button>
  );
 }
}

export function ButtonPrimary({ href, children, icon = true, ...props }) {
 if (href) {
  return (
   <Link href={href} {...props} className={cn("group mt-2 flex w-fit items-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", props.className)}>
    {children}
    {icon && (
     <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
     </svg>
    )}
   </Link>
  );
 }
 return (
  <button {...props} className={cn("group mt-2 flex w-fit items-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", props.className)} type="button">
   {children}
   {icon && (
    <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
   )}
  </button>
 );
}
