import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import GitHubSlugger from "github-slugger";
const headers_regex = /(#{1,6})\s+(.+)/g;

const computedFields = {
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
   of: { type: "string" },
   resolve: (doc) => {
    const slugger = new GitHubSlugger();
    const headings = Array.from(doc.body.raw.matchAll(headers_regex))
     .map((value) => ({
      size: value[1].length,
      content: value[2],
      slug: slugger.slug(value[2]),
     }))
     .filter(({ size }) => size <= 3);
    return headings;
   },
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

const Photography = defineDocumentType(() => ({
 name: "Photography",
 filePathPattern: "photography/*.mdx",
 contentType: "mdx",
 fields: {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  publishedAt: { type: "string", required: true },
  author: { type: "string", required: true },
  preview: { type: "string", required: true },
  count: { type: "number", required: true },
 },
 computedFields,
}));

const contentLayerConfig = makeSource({
 contentDirPath: "data",
 documentTypes: [Blog, OtherPage, Photography],
 mdx: {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
   rehypeSlug,
   rehypeCodeTitles,
   rehypePrism,
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
