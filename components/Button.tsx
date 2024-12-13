import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";

export const buttonVariants = cva("group flex w-fit items-center rounded-md px-4 py-2 font-medium duration-200 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none", {
 variants: {
  variant: {
   primary: "bg-blue-500 text-white hover:bg-blue-600",
   secondary: "bg-neutral-200 text-neutral-700 hover:bg-neutral-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
   tertiary: "border text-neutral-700 hover:bg-[#f2f3f5] dark:border-neutral-800 dark:bg-[#161617] dark:text-white dark:hover:border-neutral-700 dark:hover:bg-[#202021]",
  },
 },
 defaultVariants: {
  variant: "primary",
 },
});

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>, VariantProps<typeof buttonVariants> {
 href?: string;
 icon?: boolean;
 type?: HTMLButtonElement["type"];
 disabled?: HTMLButtonElement["disabled"];
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ href, children, icon = true, variant, ...props }, ref) => {
 if (href) {
  return (
   <Link href={href} {...props} ref={ref as React.Ref<HTMLAnchorElement>} className={cn(buttonVariants({ variant }), props.className || "")}>
    {children}
    {icon && <Icons.ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />}
   </Link>
  );
 }
 return (
  <button {...props} ref={ref as React.Ref<HTMLButtonElement>} className={cn(buttonVariants({ variant }), props.className || "")}>
   {children}
   {icon && <Icons.ArrowRight className="ml-2 size-4 duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0" />}
  </button>
 );
});
