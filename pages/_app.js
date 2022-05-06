import { Helmet } from "react-helmet";
import "../styles/globals.css";
import main_package from "../package.json";

function app({ Component, pageProps }) {
 return (
  <>
   <Helmet>
    <title>Igor Kowalczyk - Soon!</title>
    <meta name="description" content={main_package.description}/>
    <meta name="theme-color" content="#5865F2"/>
    <link rel="icon" href="/favicon.ico" />
   </Helmet>
   <Component {...pageProps} />
  </>
 );
}

export default app;
