/** @type {import('next').NextConfig} */
const CompressionPlugin = require("compression-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
 reactStrictMode: true,
 pageExtensions: ["mdx", "md", "jsx", "js"],
 poweredByHeader: false,
 trailingSlash: true,
 compress: true,
 optimizeCss: true,
 swcMinify: false,
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
    source: "/twitter",
    destination: "https://twitter.com/majonezexe",
    permanent: true,
   },
   {
    source: "/instagram",
    destination: "https://www.instagram.com/majonezexe/",
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
 webpack: (config, { isServer, dev, config: { distDir } }) => {
  if (!isServer && !dev) {
   config.plugins.push(
    new CompressionPlugin(),
    new LodashModuleReplacementPlugin(),
    new webpack.DefinePlugin({
     "process.env.ASSET_PATH": JSON.stringify("./public/"),
     "process.env.VERSION": JSON.stringify(process.env.npm_package_version),
    })
   ),
    (config.optimization.minimizer = [new TerserPlugin()]);
  }
  return config;
 },
};
