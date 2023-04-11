/* This code is not used, but it's here only if something goes wrong in the future. */
/* For modal now i'm using headlessui. This is using next/navigation and plain react. */
/* This code does not support animations as the other one. */

"use client";

import { useRouter } from "next/navigation";
import { useCallback, useRef, useEffect } from "react";

export default function Modal({ children }) {
 const overlay = useRef();
 const wrapper = useRef();
 const router = useRouter();

 const onDismiss = useCallback(() => {
  router.back();
 }, [router]);

 const onClick = useCallback(
  (e) => {
   if (e.target === overlay.current || e.target === wrapper.current) {
    if (onDismiss) onDismiss();
   }
  },
  [onDismiss, overlay, wrapper]
 );

 const onKeyDown = useCallback(
  (e) => {
   if (e.key === "Escape") onDismiss();
  },
  [onDismiss]
 );

 useEffect(() => {
  document.addEventListener("keydown", onKeyDown);
  return () => document.removeEventListener("keydown", onKeyDown);
 }, [onKeyDown]);

 return (
  <div ref={overlay} className="fixed bottom-0 left-0 right-0 top-0 z-10 mx-auto bg-black/25 backdrop-blur" onClick={onClick}>
   <div ref={wrapper} className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:w-10/12 md:w-8/12 lg:w-1/2 ">
    {children}
   </div>
  </div>
 );
}
