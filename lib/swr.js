import useSWR from "swr";

export function SWR(url, interval = 1000) {
 return useSWR(
  url,
  (href) =>
   fetch(href, {
    method: "GET",
   }).then((res) => res.json()),
  { refreshInterval: interval }
 );
}
