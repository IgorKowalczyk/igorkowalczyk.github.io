import AppProps from "next/app";
import { ThemeProvider } from "next-themes";
import "@styles/globals.css";
import { UseAnalytics } from "@lib/analytics";

export default function App({ Component, pageProps } = AppProps) {
 UseAnalytics();
 return (
   <ThemeProvider attribute="class">
    <Component {...pageProps} />
   </ThemeProvider>
 );
}
