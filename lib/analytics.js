import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const UseAnalytics = () => {
 const router = useRouter();
 useEffect(() => {
  if (process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GA_WEBSITE_ID) {
   ReactGA.initialize(process.env.NEXT_PUBLIC_GA_WEBSITE_ID);
  }
  function onRouteChangeComplete() {
   ReactGA.send("pageview");
  }
  router.events.on("routeChangeComplete", onRouteChangeComplete);
  return () => {
   router.events.off("routeChangeComplete", onRouteChangeComplete);
  };
 }, [router.events]);
};
