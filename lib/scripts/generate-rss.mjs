import { writeFileSync } from "fs";
import { allBlogs } from "../../.contentlayer/generated/index.mjs";
import { Feed } from "feed";
import "dotenv/config";

const base = `https://igorkowalczyk.dev`;

const feed = new Feed({
 title: "Igor Kowalczyk",
 description: "Igor Kowalczyk's personal website",
 language: "en",
 image: `${base}/assets/avatar.png`,
 favicon: `${base}/favicons/favicon.ico`,
 link: `${base}/blog`,
});

allBlogs.map(async (post) => {
 console.log(`Found: ${post.slug} as a post`);
 const postImage = new URL(post.image.replace("&", "&amp;"), base);
 feed.addItem({
  title: post.title,
  id: `${base}/blog/${post.slug}`,
  url: `${base}/blog/${post.slug}`,
  date: new Date(post.publishedAt),
  description: post.summary,
  image: postImage.href,
 });
});

writeFileSync("./public/feed.xml", feed.rss2());
