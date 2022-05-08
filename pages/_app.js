import AppProps from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import "@styles/globals.css";
import { UseAnalytics } from "@lib/analytics";

export default function App({ Component, pageProps } = AppProps) {
 UseAnalytics();
 return (
  <SessionProvider session={pageProps.session}>
   <ThemeProvider attribute="class">
    <Component {...pageProps} />
   </ThemeProvider>
  </SessionProvider>
 );
}
