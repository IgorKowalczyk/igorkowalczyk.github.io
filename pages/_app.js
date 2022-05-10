import AppProps from "next/app";
import { ThemeProvider } from "next-themes";
import { UseAnalytics } from "@lib/analytics";
import { Router } from "next/router";
import { AnimatePresence } from "framer-motion";
import nProgress from "nprogress";
import "@styles/progress.css";
import "@styles/globals.css";
import "@styles/tippy.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps } = AppProps) {
 UseAnalytics();
 return (
  <AnimatePresence exitBeforeEnter reducedMotion="user">
  <ThemeProvider attribute="class" themes={["light", "dark"]}>
    <Component {...pageProps}/>
  </ThemeProvider>
  </AnimatePresence>
 );
}
