"use client";

import { useState, useEffect } from "react";
import { ButtonSecondary } from "../Button";
import { Icons } from "@/components/Icons";
import { nav } from "@/config";
import { cn } from "@/lib/utils";

export default function MobileNav() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuItems = [...nav.left, ...nav.right];

 useEffect(() => {
  const handleKeyDown = (event) => {
   if (event.key === "Escape") {
    setIsMenuOpen(false);
   }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => {
   window.removeEventListener("keydown", handleKeyDown);
  };
 }, []);

 return (
  <>
   <ButtonSecondary className="size-10 justify-center border-0 lg:hidden" icon={false} onClick={() => setIsMenuOpen(true)}>
    <Icons.AlignLeft className="size-5 shrink-0 text-gray-900 dark:text-gray-100" />
   </ButtonSecondary>

   <div
    className={cn(
     {
      "rendered pointer-events-all !opacity-100": isMenuOpen,
      "pointer-events-none opacity-0": !isMenuOpen,
     },
     "fixed left-0 top-0 z-40 h-full w-full bg-black/50 duration-200 motion-reduce:transition-none dark:bg-[#161617]/70 lg:hidden"
    )}
    onClick={() => setIsMenuOpen(false)}
   />

   <div
    className={cn(
     {
      "rendered pointer-events-all !opacity-100": isMenuOpen,
      "pointer-events-none opacity-0": !isMenuOpen,
     },
     "fixed left-0 top-0 z-50 flex h-screen w-full max-w-96 flex-col border-r border-black/10 bg-white/70 p-6 backdrop-blur-xl duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]/70 lg:hidden"
    )}
   >
    <ButtonSecondary className="ml-auto mr-0 size-10 justify-center border-0" icon={false} onClick={() => setIsMenuOpen(false)}>
     <Icons.X className="size-5 shrink-0 text-gray-900 dark:text-gray-100" />
    </ButtonSecondary>

    <div className="mt-3 flex flex-col gap-2 divide-y divide-gray-200 dark:divide-neutral-800">
     {menuItems.map((item) => {
      return (
       <ButtonSecondary
        key={item.href}
        href={item.href}
        className="w-full"
        onClick={() => {
         isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
        }}
        target={item.target}
       >
        {item.title}
       </ButtonSecondary>
      );
     })}
    </div>
   </div>
  </>
 );
}
