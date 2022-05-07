import { Helmet } from "react-helmet";
import "../styles/globals.css";
import main_package from "../package.json";
import { pageView } from "../lib/analytics";

function app({ Component, pageProps }) {
 pageView();
 return (
  <>
   <Helmet>
    <title>Igor Kowalczyk - Soon!</title>
    <meta name="description" content={main_package.description} />
    <meta name="theme-color" content="#5865F2" />
    <meta name="msapplication-TileColor" content="#5865F2" />
    <link rel="icon" href="/favicon.ico" />
   </Helmet>
   <Component {...pageProps} />
  </>
 );
}

export default app;
