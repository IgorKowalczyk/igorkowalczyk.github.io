import AppProps from "next/app";
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

export default function App({ Component, pageProps, router } = AppProps) {
 UseAnalytics();
 return (
  <ThemeProvider attribute="class" themes={["light", "dark"]}>
   <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} key={router.asPath} />
   </AnimatePresence>
  </ThemeProvider>
 );
}
