/* eslint-disable camelcase */

import { writeFileSync } from "fs";
import { allBlogs } from "../../.contentlayer/generated/index.mjs";
import RSS from "rss";

const feed = new RSS({
 title: "Igor Kowalczyk",
 site_url: "https://igorkowalczyk.dev",
 feed_url: "https://igorkowalczyk.dev/feed.xml",
});

allBlogs.map((post) => {
 console.log(`Found: ${post.slug} as a post`);
 feed.item({
  title: post.title,
  url: `https://igorkowalczyk.dev/blog/${post.slug}`,
  date: post.publishedAt,
  description: post.summary,
 });
});

writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
