import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
 return (
  <Html lang="en">
   <Head>
   </Head>
   <body className="bg-white dark:bg-black text-white dark:text-black">
    <Main />
    <NextScript />
   </body>
  </Html>
 );
}
