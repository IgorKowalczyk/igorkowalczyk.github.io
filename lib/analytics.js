import ReactGA from "react-ga4";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const UseAnalytics = () => {
 const router = useRouter();
 useEffect(() => {
  if (process.env.NODE_ENV === "production") {
   ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);
  }
  function onRouteChangeComplete() {
   pageView();
  }
  router.events.on("routeChangeComplete", onRouteChangeComplete);
  return () => {
   router.events.off("routeChangeComplete", onRouteChangeComplete);
  };
 }, [router.events]);
};
