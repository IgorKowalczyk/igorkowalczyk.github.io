"use client";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

export function GlowEffect({ children, className }) {
 let [enabled, setEnabled] = useState(true);
 useEffect(() => {
  localStorage.getItem("glow") === "true" ? setEnabled(true) : setEnabled(false);
  if (!localStorage.getItem("glow")) localStorage.setItem("glow", true);
  window.addEventListener("glowEffect", () => {
   localStorage.getItem("glow") === "true" ? setEnabled(true) : setEnabled(false);
  });
 }, [enabled]);

 if (!enabled) return children;

 return (
  <Tilt glareEnable={enabled} glareMaxOpacity={0.1} glareColor="#ffffff" glarePosition="all" glareBorderRadius="8px" tiltMaxAngleX={5} tiltMaxAngleY={5} className={className}>
   {children}
  </Tilt>
 );
}
