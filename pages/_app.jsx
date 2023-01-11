import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Router } from "next/router";
import { Inter } from "@next/font/google";
import nProgress from "nprogress";
import "styles/globals.css";
import "styles/progress.css";
//import "styles/tippy.css";
//import "tippy.js/dist/tippy.css";

const inter = Inter();

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps, router }) {
 return (
  <>
   <ThemeProvider attribute="class" themes={["light", "dark"]} defaultTheme="system">
    <main className={inter.className}>
     <Component {...pageProps} key={router.route} />
     <Analytics />
    </main>
   </ThemeProvider>
  </>
 );
}
