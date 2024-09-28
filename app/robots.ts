import { meta } from "@/config";
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
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
