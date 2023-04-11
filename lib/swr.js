import useSWR from "swr";

/**
 * @param {string} url URL to fetch
 * @param {number} [interval=300000] Interval in milliseconds
 * @returns {Promise<any>}
 * @description Returns SWR data
 * */
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
