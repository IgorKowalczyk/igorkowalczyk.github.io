import { getPhotography } from "lib/getPhotography";
import Image from "next/image";

export const metadata = {
 title: "Photography",
};

export default async function Photography() {
 const photos = await getPhotography();

 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center text-[2rem] font-semibold motion-reduce:transition-none">
    My photography
    <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <p className="pb-2 text-slate-600 dark:text-slate-400">I call this page my second Instagram, here I upload photos taken by me in various places around the world. From Poland (my home country) to even Italy.</p>
   <p className="pb-6 text-slate-600 dark:text-slate-400">I love traveling, I love taking pictures, from every trip I bring back hundreds of different photos. Here you can browse through the best ones</p>

   <div className="w-full columns-2 gap-6 pt-2 md:columns-2xs">{!photos || photos.length === 0 ? <p className="mb-4 text-rose-500">No images found!</p> : photos.map((result, id) => <Image key={id} className="mb-5 scale-100 transform rounded-lg bg-gray-200 blur-0 duration-200 will-change-auto hover:brightness-90 dark:bg-neutral-200/[15%]" src={result.path} alt={result.alt} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />)}</div>
  </div>
 );
}
