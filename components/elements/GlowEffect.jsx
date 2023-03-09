"use client";

import { useEffect, useRef } from "react";

export function GlowEffect({ children, className }) {
 const cardContainerRef = useRef(null);

 useEffect(() => {
  const cardContainerElement = cardContainerRef.current;
  let currentCardElement = null;

  function handleMousemove(e) {
   const glowSetting = localStorage.getItem("glow");
   const cardElement = e.target.closest(".card");
   if (!cardElement) return;

   if (currentCardElement !== cardElement) {
    if (currentCardElement) {
     currentCardElement.style.transition = "";
     currentCardElement.style.transform = "";
    }
    currentCardElement = cardElement;
   }

   if (glowSetting === "false") {
    currentCardElement.style.setProperty("--mouse-x", null);
    currentCardElement.style.setProperty("--mouse-y", null);
    return;
   }

   const rect = cardElement.getBoundingClientRect();
   const cardCenterX = rect.left + rect.width / 2;
   const cardCenterY = rect.top + rect.height / 2;
   const dx = e.clientX - cardCenterX;
   const dy = e.clientY - cardCenterY;

   const tiltX = getTiltX(dy, rect.height);
   const tiltY = getTiltY(dx, rect.width);

   currentCardElement.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
   currentCardElement.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
   currentCardElement.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  }

  function handleMouseleave() {
   if (currentCardElement) {
    currentCardElement.style.transform = "";
    currentCardElement = null;
   }
  }

  if (typeof window !== "undefined" && cardContainerRef.current) {
   cardContainerElement.addEventListener("mousemove", handleMousemove);
   cardContainerElement.addEventListener("mouseleave", handleMouseleave);
  }

  return () => {
   cardContainerElement.removeEventListener("mousemove", handleMousemove);
   cardContainerElement.removeEventListener("mouseleave", handleMouseleave);
  };
 }, [cardContainerRef]);

 function getTiltX(dy, height) {
  const halfHeight = height / 2;
  const normalizedDy = Math.min(Math.max(dy, -halfHeight), halfHeight);
  return (-normalizedDy / halfHeight) * 2;
 }

 function getTiltY(dx, width) {
  const halfWidth = width / 2;
  const normalizedDx = Math.min(Math.max(dx, -halfWidth), halfWidth);
  return (normalizedDx / halfWidth) * -2;
 }

 return (
  <div ref={cardContainerRef} className={`${className} card-container`}>
   {children}
  </div>
 );
}
