import { allBlogs } from "contentlayer/generated";
import { meta } from "@/config";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
 const blogs = allBlogs.map((post) => ({
  url: `${meta.url}/blog/${post.slug}`,
  lastModified: post.publishedAt,
 }));

 const routes = ["", "/blog", "/contact", "/photography", "/work", "/uses"].map((route) => ({
  url: `${meta.url}${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes, ...blogs];
}
