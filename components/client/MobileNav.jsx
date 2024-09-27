"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { ButtonSecondary, buttonSecondaryStyles } from "../Button";
import { Icons } from "@/components/Icons";
import { nav } from "@/config";
import { cn } from "@/lib/utils";

export default function MobileNav() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const menuItems = [...nav.main, ...nav.mobile];

 return (
   <Drawer.Root noBodyStyles={true} direction="left" open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
    <Drawer.Trigger className={cn(buttonSecondaryStyles, "size-10 !outline-none !bg-transparent dark:hover:!bg-white/15  hover:!bg-gray-300 justify-center border-0 lg:hidden")}>
      <Icons.AlignLeft className="size-5 shrink-0 text-gray-900 dark:text-gray-100" />
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
 );
}
