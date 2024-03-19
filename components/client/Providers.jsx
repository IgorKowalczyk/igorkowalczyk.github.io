"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { Suspense, useEffect } from "react";

export function Providers({ children }) {
 useEffect(() => {
  document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  window.addEventListener("decorations", () => {
   document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  });
 }, []);

 return (
  <>
   <Suspense fallback={<></>}>
    <AppProgressBar color="#3b82f6" height="2px" options={{ showSpinner: false }} shallowRouting />
   </Suspense>
   {children}
  </>
 );
}
