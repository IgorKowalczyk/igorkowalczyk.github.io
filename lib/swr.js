import useSWR from "swr";

export function SWR(url, interval = 300000) {
 return useSWR(
  url,
  (href) =>
   fetch(href, {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
     "Cache-Control": "max-age=600",
    },
   }).then((res) => res.json()),
  { refreshInterval: interval }
 );
}
