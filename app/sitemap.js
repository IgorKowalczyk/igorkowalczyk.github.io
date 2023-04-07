import { allBlogs } from "contentlayer/generated";
import { meta } from "/config.js";

export default async function sitemap() {
 const blogs = allBlogs.map((post) => ({
  url: `${meta.url}/blog/${post.slug}`,
  lastModified: post.publishedAt,
 }));

 const routes = ["", "/blog", "/contact", "/photography", "/repositories", "/uses"].map((route) => ({
  url: `${meta.url}${route}`,
  lastModified: new Date().toISOString().split("T")[0],
 }));

 return [...routes, ...blogs];
}
