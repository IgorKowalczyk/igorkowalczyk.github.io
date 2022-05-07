import { Html, Head, Main, NextScript } from "next/document";
import Arc from "../components/arc";

export default function Document(props) {
 return (
  <Html lang="en">
   <Head>
    <Arc />
   </Head>
   <body className="bg-white dark:bg-black text-white dark:text-black">
    <Main />
    <NextScript />
   </body>
  </Html>
 );
}
