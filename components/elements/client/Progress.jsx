"use client";

import NProgress from "nprogress";
import { useEffect } from "react";

// Temporary fix for because new Next.js version do not support router events
export default function ProgressBar() {
 useEffect(() => {
  NProgress.configure({ showSpinner: false });

  const handleAnchorClick = (event) => {
   const targetUrl = event.currentTarget.href;
   const currentUrl = location.href;
   if (targetUrl !== currentUrl) {
    NProgress.start();
   }
  };

  const handleMutation = () => {
   const anchorElements = document.querySelectorAll("a");
   anchorElements.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick));
  };

  const mutationObserver = new MutationObserver(handleMutation);
  mutationObserver.observe(document, { childList: true, subtree: true });

  window.history.pushState = new Proxy(window.history.pushState, {
   apply: (target, thisArg, argArray) => {
    NProgress.done();
    return target.apply(thisArg, argArray);
   },
  });
 });

 return null;
}
