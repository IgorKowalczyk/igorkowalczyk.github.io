import { allBlogs } from "contentlayer/generated";
import { NextResponse } from "next/server";
import { meta } from "/config";

export const runtime = "edge";

export async function GET() {
 return new NextResponse(
  `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>${meta.title}</title>
    <subtitle>Blog</subtitle>
    <link href="${meta.url}/feed" rel="self"/>
    <link href="${meta.url}/"/>
    <updated>${new Date(
     allBlogs.reduce((acc, post) => {
      return post.publishedAt > acc ? post.publishedAt : acc;
     }, "")
    ).toISOString()}</updated>
    <author>
      <name>${meta.author}</name>
    </author>
    <id>${meta.url}/</id>
    ${allBlogs.reduce((acc, post) => {
     return `${acc}
        <entry>
          <id>${meta.url}/blog/${post.slug}</id>
          <title>${post.title}</title>
          <summary>${post.summary}</summary>
          <link href="${meta.url}/blog/${post.slug}"/>
          <updated>${new Date(post.publishedAt).toISOString()}</updated>
        </entry>`;
    }, "")}
  </feed>`,

  {
   headers: {
    "content-type": "application/atom+xml; charset=utf-8",
   },
  }
 );
}
