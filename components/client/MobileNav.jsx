"use client";

import { useState, useEffect } from "react";
import { Drawer } from "vaul";
import { ButtonSecondary } from "../Button";
import { Icons } from "@/components/Icons";
import { nav } from "@/config";

export default function MobileNav() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuItems = [...nav.main, ...nav.mobile];

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
   <Drawer.Root noBodyStyles={true} direction="left" open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
    <Drawer.Trigger>
     <ButtonSecondary className="size-10 justify-center border-0 lg:hidden" icon={false} onClick={() => setIsMenuOpen(true)}>
      <Icons.AlignLeft className="size-5 shrink-0 text-gray-900 dark:text-gray-100" />
     </ButtonSecondary>
    </Drawer.Trigger>
    <Drawer.Portal>
     <Drawer.Overlay className="fixed inset-0 bg-black/50 dark:bg-[#161617]/70" />

     <Drawer.Content className="fixed inset-y-0 left-0 z-10 flex w-full max-w-96 !outline-none">
      <div className="flex w-full max-w-96 flex-col border-r border-black/10 bg-white/70 p-6 backdrop-blur-xl duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]/70">
       <Drawer.Description className="mt-3 flex flex-col gap-2 divide-y divide-gray-200 dark:divide-neutral-800">
        {menuItems.map((item) => {
         return (
          <ButtonSecondary
           key={item.href}
           href={item.href}
           className="w-full"
           onClick={() => setIsMenuOpen(!isMenuOpen)}
           target={item.target}
          >
           {item.title}
          </ButtonSecondary>
         );
        })}
       </Drawer.Description>
      </div>
     </Drawer.Content>
    </Drawer.Portal>
   </Drawer.Root>
  </>
 );
}
