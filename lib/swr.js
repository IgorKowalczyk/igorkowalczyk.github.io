import useSWR from "swr";

export function SWR(url, interval = 300000) {
 return useSWR(
  url,
  (href) =>
   fetch(href, {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
    },
   }).then((res) => res.json()),
  { refreshInterval: interval }
 );
}
