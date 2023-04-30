"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export function Theme({ children }) {
 useEffect(() => {
  document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  window.addEventListener("decorations", () => {
   document.documentElement.style.setProperty("--hidden", localStorage.getItem("decorations") === "false" ? "none" : "block");
  });
 }, []);

 return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
