/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const CompressionPlugin = require("compression-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

//const withBundleAnalyzer = require("@next/bundle-analyzer")({
// enabled: process.env.ANALYZE === "true",
//});

//module.exports = withBundleAnalyzer({});

module.exports = withPWA({
 pwa: {
  dest: "public",
  disable: process.env.NODE_ENV === "development",
 },
 reactStrictMode: true,
 pageExtensions: ["mdx", "md", "jsx", "js"],
 poweredByHeader: false,
 trailingSlash: true,
 compress: true,
 optimizeCss: true,
 swcMinify: false,
 images: {
  domains: [
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
   {
    source: "/r/:path*",
    destination: "/:path*",
    permanent: true,
   },
   {
    source: "/discord-server",
    destination: "/discord",
    permanent: true,
   },
  ];
 },
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: securityHeaders,
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
});

const ContentSecurityPolicy = `
default-src 'self' *.googletagmanager.com *.arc.io;
script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com arc.io *.arc.io *.sentry-cdn.com;
child-src 'self' *.youtube.com *.google.com *.twitter.com *.arc.io;
style-src 'self' 'unsafe-inline' *.googleapis.com *.arc.io *.cloudflare.com;
img-src * blob: data:;
media-src 'none';
connect-src *;
font-src 'self' *.googleapis.com *.gstatic.com *.arc.io;
`;

const securityHeaders = [
 {
  key: "Content-Security-Policy",
  value: ContentSecurityPolicy.replace(/\n/g, ""),
 },
 {
  key: "Referrer-Policy",
  value: "no-referrer",
 },
 {
  key: "X-Content-Type-Options",
  value: "nosniff",
 },
 {
  key: "X-DNS-Prefetch-Control",
  value: "on",
 },
 {
  key: "Strict-Transport-Security",
  value: "max-age=31536000; includeSubDomains; preload",
 },
 {
  key: "Cache-Control",
  value: "public, max-age=300, must-revalidate",
 },
 {
  key: "X-XSS-Protection",
  value: "1; mode=block",
 },
 {
  key: "Permissions-Policy",
  value: "camera=(), microphone=(), geolocation=()",
 },
];
