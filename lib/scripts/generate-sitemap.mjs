/* eslint-disable no-undef */
import { writeFile } from "fs/promises";
import { globby } from "globby";
import { allBlogs } from "../../.contentlayer/generated/index.mjs";
import { format } from "prettier";
import "dotenv/config";
import path from "path";

const [pages, blogPages] = await Promise.all([
 globby([
  // Prettier
  "app/**/*.{jsx,js}",
  "!app/api/**/*",
  "!app/{layout,loading,error}.{jsx,js,ts,tsx}",
  "!app/blog/**/*",
 ]),
 Promise.resolve(allBlogs).then((blogs) => blogs.map((blog) => `app/blog/${blog.slug}`)),
]);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${pages
    .concat(blogPages)
    .map((page) => {
     console.log(`Found: ${page} as a page`);
     const parsedPath = path.parse(page);
     const dirPath = parsedPath.dir
      .replace(/^app\//, "")
      .replace(/\/page$/, "")
      .replace("/rss.xml", "");
     const fileName = parsedPath.name === "page" ? "" : parsedPath.name;
     let filePath = path.join(dirPath, fileName);
     if (filePath.startsWith("app/")) {
      filePath = filePath.substring(4);
     }
     if (filePath.endsWith("/page")) {
      filePath = filePath.substring(0, filePath.length - 5);
     }
     const route = filePath === "" ? "" : filePath;
     return `<url>
       <loc>https://igorkowalczyk.dev/${route}</loc>
       <priority>${route ? "0.80" : "1"}</priority>
      </url>`;
    })
    .join("")}
  </urlset>`;

await writeFile(
 "public/sitemap.xml",
 format(sitemap, {
  parser: "html",
 })
);
