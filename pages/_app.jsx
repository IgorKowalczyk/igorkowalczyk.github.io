import nProgress from "nprogress";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { UseAnalytics } from "@lib/analytics";
import { Router } from "next/router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { ads } from "@/config";
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
  <>
   <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system">
    <Script
     id="Adsense-id"
     data-ad-client={`ca-pub-${ads.ca_pub}`}
     async
     strategy="afterInteractive"
     onError={(e) => {
      console.error("Script failed to load", e);
     }}
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />
    <MotionConfig reducedMotion="user">
     <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
     </AnimatePresence>
    </MotionConfig>
   </ThemeProvider>
  </>
 );
}
