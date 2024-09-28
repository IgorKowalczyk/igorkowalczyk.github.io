"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { Suspense, useEffect, ReactNode } from "react";

interface ProvidersProps {
 children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
 useEffect(() => {
  const updateDecorations = () => {
   document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  };

  updateDecorations();
  window.addEventListener("decorations", updateDecorations);

  return () => {
   window.removeEventListener("decorations", updateDecorations);
  };
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
