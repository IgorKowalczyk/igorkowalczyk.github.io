"use client";

import { useEffect } from "react";

export function GlowEffect() {
 useEffect(() => {
  if (typeof window !== "undefined") {
   document.getElementById("cards").onmousemove = (e) => {
    const settings = localStorage.getItem("glow");
    if (settings === "false") return;
    for (const card of document.getElementsByClassName("card")) {
     const rect = card.getBoundingClientRect();
     card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
     card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
   };
  }
 }, []);
}
