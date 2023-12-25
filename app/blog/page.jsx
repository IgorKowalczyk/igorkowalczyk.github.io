import { pick } from "contentlayer/client";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { parseISO } from "/lib/utils";

export default function Blog() {
 const posts = allBlogs.map((post) => pick(post, ["slug", "title", "summary", "publishedAt"])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

 return (
  <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
   <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center text-[2rem] font-semibold motion-reduce:transition-none">
    Tech Blog <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <p className="mb-4 text-gray-700 dark:text-neutral-300">A blog about technology, programming and many other interesting things. I write about my experiences, my projects and my opinions.</p>

   <h3 className="mt-8 flex items-center justify-center box-decoration-clone bg-clip-text text-center text-[1.7rem] font-semibold motion-reduce:transition-none">
    All Posts
    <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h3>
   {!posts.length && <p className="mb-4 text-rose-500">No posts found!</p>}
   <ol className="relative mt-8 border-l border-gray-200 dark:border-neutral-800">
    {posts.map((post, index) => (
     <Link href={`/blog/${post.slug}`} className="w-full" key={index}>
      <li className="-mt-3 mb-10 ml-6 rounded-2xl border px-6 py-3 duration-200 hover:bg-gray-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
       <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-neutral-800 dark:ring-[#101110]">
        <CalendarIcon className="h-3 w-3 text-blue-700 dark:text-white" />
       </span>
       <header>
        <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
         {post.title} {index === 0 && <span className="ml-3 mr-2 hidden rounded bg-blue-200 py-0.5 pl-1.5 pr-2.5 text-sm font-medium sm:block dark:bg-white/10">🔥 Latest</span>}
        </h3>
        <time className="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-neutral-500" dateTime={new Date(post.publishedAt).toUTCString()}>
         {parseISO(post.publishedAt)}
        </time>
       </header>
       <p className="mb-2 text-base font-normal text-gray-700 dark:text-neutral-300">{post.summary}</p>
       <p className="inline-flex text-sm font-semibold text-[#1491ff]">Read more</p>
      </li>
     </Link>
    ))}
   </ol>
  </div>
 );
}
