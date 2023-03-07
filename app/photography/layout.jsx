import { Suspense } from "react";
import Loader from "./loader";

export default async function Layout({ children }) {
 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
    My photography<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>

   <p className="pb-2 font-inter text-slate-600 dark:text-slate-400">I call this page my second Instagram, here I upload photos taken by me in various places around the world. From Poland - my home country to Italy.</p>
   <p className="pb-6 font-inter text-slate-600 dark:text-slate-400">I love traveling, I love taking pictures, from every trip I bring back hundreds of different photos. Here you can browse through the best ones</p>
   <div className="w-full columns-2 gap-6 pt-2 md:columns-2xs">
    <Suspense fallback={<Loader />}>{children}</Suspense>
   </div>
  </div>
 );
}
