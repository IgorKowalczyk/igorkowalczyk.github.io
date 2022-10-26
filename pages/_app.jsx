import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import { AnimatePresence, MotionConfig } from "framer-motion";
import { GoogleAnalytics } from "@lib/analytics";
// import { Poppins } from "@next/font/google";
import nProgress from "nprogress";
import "@styles/globals.css";
import "@styles/progress.css";
//import "@styles/tippy.css";
//import "tippy.js/dist/tippy.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

/* const normal = Poppins({
 display: "swap",
 weight: "400",
 subsets: ["latin"],
});

const medium = Poppins({
 display: "swap",
 weight: "500",
 subsets: ["latin"],
});

const semibold = Poppins({
 display: "swap",
 weight: "600",
 subsets: ["latin"],
});

const fonts = [normal, medium, semibold];
*/

export default function App({ Component, pageProps, router }) {
 process.env.NODE_ENV === "production" ? GoogleAnalytics() : null;

 return (
  <>
   <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system">
    <MotionConfig reducedMotion="user">
     <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
     </AnimatePresence>
    </MotionConfig>
   </ThemeProvider>
   <Analytics />
  </>
 );
}
