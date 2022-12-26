import { useState } from "react";
import { Container } from "components/elements/Container";
import { ListElement } from "components/blog/BlogList";
import { pick } from "contentlayer/client";
import { allBlogs } from "contentlayer/generated";
import { meta } from "/config";

export default function Blog({ posts }) {
 const [searchValue, setSearchValue] = useState("");
 const filteredBlogPosts = posts.filter((post) => post.title.toLowerCase().split(" ").join("").includes(searchValue.toLowerCase().split(" ").join("")) || post.summary.toLowerCase().split(" ").join("").includes(searchValue.toLowerCase().split(" ").join("")));
 return (
  <Container title={`${meta.title} - Blog`}>
   <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-8">
    <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
     Tech Blog <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h1>
    <p className="mb-4 font-inter text-slate-600 dark:text-slate-400">
     A blog about technology, programming and many other interesting things. There {posts.length > 1 ? "are" : "is"} currently {posts.length} {posts.length > 1 ? "posts" : "post"} on the blog, use the search below to filter posts.
    </p>
    <div className="relative mb-4 w-full">
     <input aria-label="Search articles" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search articles" className={`${!filteredBlogPosts.length ? "ring-rose-500 focus:text-rose-500 focus:dark:text-red-400" : ""} block w-full rounded-md bg-zinc-200/[25%] px-4 py-2 font-inter text-slate-900 outline-none duration-200 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:shadow-md focus:ring dark:bg-slate-800 dark:text-slate-100`} />
     <svg className="absolute right-3 top-[10px] h-5 w-5 text-slate-400 dark:text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
     </svg>
    </div>
    <h3 className="mt-8 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[1.7rem] font-semibold motion-reduce:transition-none">
     All Posts<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h3>
    {!filteredBlogPosts.length && <p className="mb-4 font-inter text-rose-500">No posts found!</p>}
    <ol className="relative mt-8 border-l border-slate-200 dark:border-slate-700">
     {filteredBlogPosts.map((post, index) => (
      <ListElement {...post} index={index} key={index} />
     ))}
     {filteredBlogPosts.length > 0 && (
      <li className="mb-10 ml-4">
       <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700"></div>
      </li>
     )}
    </ol>
   </div>
  </Container>
 );
}

export function getStaticProps() {
 const posts = allBlogs.map((post) => pick(post, ["slug", "title", "summary", "publishedAt"])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
 return { props: { posts } };
}
