import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";

import { GoogleAnalytics } from "@lib/analytics";
import nProgress from "nprogress";
import "@styles/globals.css";
import "@styles/progress.css";
//import "@styles/tippy.css";
//import "tippy.js/dist/tippy.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps, router }) {
 process.env.NODE_ENV === "production" ? GoogleAnalytics() : null;
 return (
  <>
   <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system">
    <Component {...pageProps} key={router.route} />
   </ThemeProvider>
   <Analytics />
  </>
 );
}
