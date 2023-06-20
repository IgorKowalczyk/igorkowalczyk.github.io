import { ListElement } from "components/blog/BlogList";
import { pick } from "contentlayer/client";
import { allBlogs } from "contentlayer/generated";

export const runtime = "edge";

export default function Blog() {
 const posts = allBlogs.map((post) => pick(post, ["slug", "title", "summary", "publishedAt"])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
 return (
  <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
   <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center  text-[2rem] font-semibold motion-reduce:transition-none">
    Tech Blog <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <p className="mb-4  text-slate-600 dark:text-slate-400">
    A blog about technology, programming and many other interesting things. There {posts.length > 1 ? "are" : "is"} currently {posts.length} {posts.length > 1 ? "posts" : "post"} on the blog, use the search below to filter posts.
   </p>

   <h3 className="mt-8 flex items-center justify-center box-decoration-clone bg-clip-text text-center  text-[1.7rem] font-semibold motion-reduce:transition-none">
    All Posts
    <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h3>
   {!posts.length && <p className="mb-4  text-rose-500">No posts found!</p>}
   <ol className="relative mt-8 border-l border-slate-200 dark:border-neutral-800">
    {posts.map((post, index) => (
     <ListElement {...post} index={index} key={index} />
    ))}
   </ol>
  </div>
 );
}
