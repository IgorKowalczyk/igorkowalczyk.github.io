import ReactGA from "react-ga4";
ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

export const pageView = (path) => {
 return ReactGA.send({ hitType: "pageview", page: path });
};

export const customEvent = (category, action, label = "") => {
 return ReactGA.event({
  category: category,
  action: action,
  label: label,
 });
};
