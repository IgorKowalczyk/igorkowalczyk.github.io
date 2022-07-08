import nProgress from "nprogress";
import { ThemeProvider } from "next-themes";
import { UseAnalytics } from "@lib/analytics";
import { Router } from "next/router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import "@styles/globals.css";
import "@styles/progress.css";
//import "@styles/tippy.css";
//import "tippy.js/dist/tippy.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps, router }) {
 process.env.NODE_ENV === "production" ? UseAnalytics() : null;
 return (
  <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system">
   <MotionConfig reducedMotion="user">
    <AnimatePresence exitBeforeEnter>
     <Component {...pageProps} key={router.route} />
    </AnimatePresence>
   </MotionConfig>
  </ThemeProvider>
 );
}
