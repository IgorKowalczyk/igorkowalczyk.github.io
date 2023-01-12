import { Container } from "components/elements/Container";
import { ListElement } from "components/photography/ImagesList";
import { pick } from "contentlayer/client";
import { allPhotographies } from "contentlayer/generated";
import { meta } from "/config";
import { useState } from "react";

export default function Photography({ photos }) {
 const [searchValue, setSearchValue] = useState("");
 const filteredPhotos = photos.filter((photo) => photo.title.toLowerCase().split(" ").join("").includes(searchValue.toLowerCase().split(" ").join("")) || photo.description.toLowerCase().split(" ").join("").includes(searchValue.toLowerCase().split(" ").join("")));
 return (
  <Container title={`${meta.title} - Photography`}>
   <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-8">
    <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
     My photography<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h1>
    <p className="pb-2 font-inter text-slate-600 dark:text-slate-400">I call this page my second Instagram, here I upload photos taken by me in various places around the world. From Poland - my home country to Italy.</p>
    <p className="pb-6 font-inter text-slate-600 dark:text-slate-400">I love traveling, I love taking pictures, from every trip I bring back hundreds of different photos. Here you can browse through the best ones</p>
    <div className="relative mb-4 w-full">
     <input aria-label="Search photos" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="Search photos" className={`${!filteredPhotos.length ? "ring-rose-500 focus:text-rose-500 focus:dark:text-red-400" : ""} block w-full rounded-md bg-zinc-200/[25%] px-4 py-2 font-inter text-slate-900 outline-none duration-200 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:shadow-md focus:ring dark:bg-slate-800 dark:text-slate-100`} />
     <svg className="absolute right-3 top-[10px] h-5 w-5 text-slate-400 dark:text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
     </svg>
    </div>
    <h3 className="mt-8 mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[1.7rem] font-semibold motion-reduce:transition-none">
     All Photos<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h3>
    {!filteredPhotos.length && <p className="mb-4 font-inter text-rose-500 ">No images found!</p>}

    <ol className="relative mt-8 border-l border-slate-200 dark:border-slate-700">
     {filteredPhotos.map((post, index) => (
      <ListElement {...post} index={index} key={index} />
     ))}
     {filteredPhotos.length > 0 && (
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
 const photos = allPhotographies.map((post) => pick(post, ["slug", "title", "description", "publishedAt", "preview", "count"])).sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));
 return { props: { photos } };
}
