/** @type {import('next').NextConfig} */

module.exports = {
 reactStrictMode: true,
 pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
 poweredByHeader: false,
 trailingSlash: true,
 compress: true,
 swcMinify: true,
 images: {
  domains: [
   "i.scdn.co", // Spotify Album Art
   "pbs.twimg.com", // Twitter Profile Picture
   "github.githubassets.com", // GitHub assets
  ],
 },
 async redirects() {
  return [
   {
    source: "/discord",
    destination: "https://discord.gg/uxtSMtd2xZ",
    permanent: true,
   },
   {
    source: "/blog",
    destination: "https://igorkowalczyk.github.io/blog/",
    permanent: true,
   },
   {
    source: "/arc-sw.js",
    destination: "https://arc.io/arc-sw.js",
    permanent: true,
   },
  ];
 },
};
