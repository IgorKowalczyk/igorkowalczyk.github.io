import { writeFileSync } from "fs";
import { globby } from "globby";
import { allBlogs } from "../../.contentlayer/generated/index.mjs";
import { format } from "prettier";
import "dotenv/config";

const pages = await globby([
 // prettier
 "pages/*.{js,jsx,ts,tsx}",
 "pages/*/*.{js,jsx,ts,tsx}",
 "!pages/_*.js*",
 "!pages/[*.jsx",
 "!pages/api",
 "!pages/404.js*",
 "!pages/middleware.*",
]);
const blogPages = allBlogs.map((page) => `pages/blog/${page.slug}`);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${pages
    .concat(blogPages)
    .map((page) => {
     if (page.includes("[")) return;
     console.log(`Found: ${page.split(".")[0]} as a page`);
     const path = page
      .split("/")
      .map((path) => path.split(".")[0])
      .slice(1)
      .join("/")
      .replace(/\/index$/, "")
      .replace("pages/", "/")
      .replace("public/", "/")
      .replace("/rss.xml", "");
     const route = path === "index" ? "" : path;
     return `<url>
       <loc>https://igorkowalczyk.dev/${route}</loc>
       <priority>${route ? "0.80" : "1"}</priority>
      </url>
      `;
    })
    .join("")}
  </urlset>`;

writeFileSync(
 "public/sitemap.xml",
 format(sitemap, {
  parser: "html",
 })
);
