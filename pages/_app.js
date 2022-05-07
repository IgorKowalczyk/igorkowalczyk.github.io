import { Helmet } from "react-helmet";
import "../styles/globals.css";
import main_package from "../package.json";
import { UseAnalytics } from "../lib/analytics";
import React, { useState, useEffect } from "react";

function app({ Component, pageProps }) {
 UseAnalytics();
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
