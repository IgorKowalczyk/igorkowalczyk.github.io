"use client";

import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { changeDecorations } from "lib/utils";

export function ClientProviders({ children }) {
 useEffect(() => {
  changeDecorations(localStorage.getItem("decorations"));
  window.addEventListener("decorations", () => {
   changeDecorations(localStorage.getItem("decorations"));
  });
 }, []);

 return (
  <ThemeProvider attribute="class">
   {children}
   <Analytics />
  </ThemeProvider>
 );
}
