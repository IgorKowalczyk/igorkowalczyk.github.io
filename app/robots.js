import { meta } from "config.js";

export default function robots() {
 return {
  rules: [
   {
    userAgent: "*",
   },
  ],
  sitemap: `${meta.url}/sitemap.xml`,
  host: meta.url,
 };
}
