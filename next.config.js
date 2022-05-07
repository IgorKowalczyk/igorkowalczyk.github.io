/** @type {import('next').NextConfig} */

const nextConfig = {
 reactStrictMode: true,
 poweredByHeader: false,
 trailingSlash: true,
 swcMinify: true,
 images: {
  domains: [
   "i.scdn.co", // Spotify Album Art
   "pbs.twimg.com", // Twitter Profile Picture
  ],
 },
};

module.exports = nextConfig;
