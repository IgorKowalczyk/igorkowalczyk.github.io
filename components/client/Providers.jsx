"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ThemeProvider as Theme } from "next-themes";
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
    <AppProgressBar color="#6310ff" height="2px" options={{ showSpinner: false }} shallowRouting style={"#nprogress .bar { background: linear-gradient(to right, #6310ff, #1491ff); }"} />
   </Suspense>
   <Theme attribute="class">{children}</Theme>
  </>
 );
}
