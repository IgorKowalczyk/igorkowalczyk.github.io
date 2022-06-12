import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const UseAnalytics = () => {
 const router = useRouter();
 useEffect(() => {
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_WEBSITE_ID) {
   ReactGA.initialize(process.env.NEXT_PUBLIC_GA_WEBSITE_ID);
  }
  function onRouteChangeComplete(url) {
   ReactGA.send({ hitType: "pageview", page: url });
  }
  router.events.on("routeChangeComplete", onRouteChangeComplete);
  router.events.on("hashChangeComplete", onRouteChangeComplete);
  return () => {
   router.events.off("routeChangeComplete", onRouteChangeComplete);
   router.events.off("hashChangeComplete", onRouteChangeComplete);
  };
 }, [router.events]);
};
