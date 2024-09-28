import { defineDocumentType, makeSource, ComputedFields } from "contentlayer2/source-files";
import GitHubSlugger from "github-slugger";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const headersRegex = /(#{1,6})\s+(.+)/g;

const computedFields: ComputedFields = {
 readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
 wordCount: {
  type: "number",
  resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
 },
 slug: {
  type: "string",
  resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
 },
};

const Blog = defineDocumentType(() => ({
 name: "Blog",
 filePathPattern: "blog/*.mdx",
 contentType: "mdx",
 fields: {
  title: { type: "string", required: true },
  publishedAt: { type: "string", required: true },
  author: { type: "string", required: true },
  summary: { type: "string", required: true },
  image: { type: "string", required: false },
 },
 computedFields: {
  ...computedFields,
  headings: {
   type: "list",
   resolve: (doc) => {
    const slugger = new GitHubSlugger();
    const headings = Array.from(doc.body.raw.matchAll(headersRegex))
     .map((value: RegExpMatchArray) => ({
      size: value[1].length,
      content: value[2],
      slug: slugger.slug(value[2]),
     }))
     .filter(({ size }) => size <= 3);
    return headings;
   },
  },
  structuredData: {
   type: "json",
   resolve: (doc) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: doc.title,
    datePublished: doc.publishedAt,
    dateModified: doc.publishedAt,
    description: doc.summary,
    url: `https://igorkowalczyk.dev/blog/${doc._raw.flattenedPath}`,
    author: {
     "@type": "Person",
     name: doc.author,
    },
   }),
  },
 },
}));

const OtherPage = defineDocumentType(() => ({
 name: "OtherPage",
 filePathPattern: "*.mdx",
 contentType: "mdx",
 fields: {
  title: { type: "string", required: true },
  description: { type: "string", required: false },
 },
 computedFields,
}));

const contentLayerConfig = makeSource({
 contentDirPath: "content",
 documentTypes: [Blog, OtherPage],
 mdx: {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
   rehypeSlug,
   [
    rehypePrettyCode,
    {
     theme: "one-dark-pro",
     keepBackground: false,
     onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and allow empty
      // lines to be copy/pasted
      if (node.children.length === 0) {
       node.children = [{ type: "text", value: " " }];
      }
     },
    },
   ],
   [
    rehypeAutolinkHeadings,
    {
     properties: {
      className: ["anchor"],
     },
    },
   ],
  ],
 },
});

export default contentLayerConfig;
