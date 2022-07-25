import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const prettierConfig = await prettier.resolveConfig("../prettierrc");
const pages = await globby(["pages/*.{js,jsx,ts,tsx}", "!pages/_*.js*", "!pages/api", "!pages/404.js*", "!pages/middleware.*"]);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   ${pages
    .map((page) => {
     console.log(`Found: ${page} as a page`);
     const path = `/` + page.split("/").pop().replace(".jsx", "");
     const route = path === "/index" ? "" : path;
     return `<url>
       <loc>https://igorkowalczyk.dev${route}</loc>
      </url>
      `;
    })
    .join("")}
  </urlset>`;

writeFileSync(
 "public/sitemap.xml",
 prettier.format(sitemap, {
  ...prettierConfig,
  parser: "html",
 })
);
