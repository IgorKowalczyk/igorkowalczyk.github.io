import Link from "next/link";
import { BlurImage } from "components/elements/BlurImage";
import { getPhotography } from "lib/functions";

export const metadata = {
 title: "Photography",
};

export default async function Photography() {
 const photos = await getPhotography();

 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
    My photography<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <p className="pb-2 font-inter text-slate-600 dark:text-slate-400">I call this page my second Instagram, here I upload photos taken by me in various places around the world. From Poland - my home country to Italy.</p>
   <p className="pb-6 font-inter text-slate-600 dark:text-slate-400">I love traveling, I love taking pictures, from every trip I bring back hundreds of different photos. Here you can browse through the best ones</p>

   <div className="w-full columns-2 gap-6 pt-2 md:columns-2xs">
    {!photos || photos.length === 0 ? (
     <p className="mb-4 font-inter text-rose-500">No posts found!</p>
    ) : (
     photos.map((result, id) => (
      <Link key={id} href={`${result.path}`} target="_blank" className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in rounded-lg bg-slate-100 bg-cover after:pointer-events-none after:absolute after:inset-0 after:rounded-lg dark:bg-slate-800">
       <BlurImage src={result.path} blur={result.blur} alt={result.id + "image"} />
      </Link>
     ))
    )}
   </div>
  </div>
 );
}
