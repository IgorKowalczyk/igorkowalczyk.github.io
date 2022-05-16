import nProgress from "nprogress";
import { ThemeProvider } from "next-themes";
import { UseAnalytics } from "@lib/analytics";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import "@styles/progress.css";
import "@styles/globals.css";
import "@styles/tippy.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

const handExitComplete = () => {
 if (typeof window !== "undefined") {
  const hashId = window.location.hash;
  if (hashId) {
   const element = document.querySelector(hashId);
   if (element) {
    element.scrollIntoView({
     behavior: "smooth",
     block: "start",
     inline: "nearest"
    });
   }
  }
 }
};

export default function App({ Component, pageProps, router }) {
 UseAnalytics();
 return (
  <ThemeProvider attribute="class" themes={["light", "dark"]}>
   <AnimatePresence exitBeforeEnter onExitComplete={handExitComplete}>
    <Component {...pageProps} key={router.asPath} />
   </AnimatePresence>
  </ThemeProvider>
 );
}
