import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
 href?: string;
 children: React.ReactNode;
 icon?: boolean;
 type?: "button" | "submit" | "reset";
 disabled?: boolean;
}

export const buttonPrimaryStyles = "group flex w-fit items-center rounded-md bg-blue-500 px-4 py-2 font-medium text-white duration-200 hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none";

export function ButtonPrimary({ href, children, icon = true, ...props }: ButtonProps) {
 if (href) {
  return (
   <Link href={href} {...props} className={cn(buttonPrimaryStyles, props.className || "")}>
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
  <button {...props} className={cn(buttonPrimaryStyles, props.className || "")} type="button">
   {children}
   {icon && (
    <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
   )}
  </button>
 );
}

export const buttonSecondaryStyles = "group flex w-fit items-center rounded-md bg-neutral-200 px-4 py-2 font-medium text-neutral-700 duration-200 hover:bg-neutral-300 disabled:cursor-not-allowed disabled:opacity-50  motion-reduce:transition-none dark:bg-white/10 dark:text-white dark:hover:bg-white/15";

export function ButtonSecondary({ href, children, icon = true, ...props }: ButtonProps) {
 if (href) {
  return (
   <Link href={href} {...props} className={cn(buttonSecondaryStyles, props.className || "")}>
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
   <button {...props} className={cn(buttonSecondaryStyles, props.className || "")} type="button">
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

export const buttonTertiaryStyles = "group flex w-fit items-center rounded-md border px-4 py-2 font-medium text-neutral-700 duration-200 hover:bg-[#f2f3f5] disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]";

export function ButtonTertiary({ href, children, icon = true, ...props }: ButtonProps) {
 if (href) {
  return (
   <Link href={href} {...props} className={cn(buttonTertiaryStyles, props.className || "")}>
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
  <button {...props} className={cn(buttonTertiaryStyles, props.className || "")} type="button">
   {children}
   {icon && (
    <svg className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
   )}
  </button>
 );
}
