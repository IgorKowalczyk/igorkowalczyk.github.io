import NextLink from "next/link";
import { meta } from "@/config";
import { Container } from "@components/elements/Container";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { BlurPreview } from "@components/elements/BlurImage";
import { SWR } from "@lib/swr";

export default function Photography({ props }) {
 const { data: _categories } = SWR("/api/photography/all");
 const categories = _categories ? _categories : null;

 return (
  <Container title={`${meta.title} - Photography`}>
   <h1 className="my-6 flex flex-wrap items-center justify-center box-decoration-clone bg-clip-text text-center font-poppins text-[2rem] font-semibold motion-reduce:transition-none">
    My photography<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <section id={"photography"} className="mx-auto flex max-w-3xl scroll-mt-20 flex-col items-start justify-center px-6">
    <p className="pb-2 font-poppins text-slate-600 dark:text-slate-400">I call this page my second Instagram, here I upload photos taken by me in various places around the world. From Poland - my home country to Italy.</p>
    <p className="pb-6 font-poppins text-slate-600 dark:text-slate-400">I love traveling, I love taking pictures, from every trip I bring back hundreds of different photos. Here you can browse through the best ones</p>
    {_categories ? (
     categories && (
      <>
       {categories?.map((category, index) => (
        <NextLink href={category.slug} key={`${index}-image`}>
         <a className="group mb-4 w-full cursor-pointer">
          <article className="group flex flex-col justify-between rounded-md bg-zinc-200/[25%] px-6 py-4 duration-200 hover:bg-zinc-200/60 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]" key={category.id}>
           <div className="flex flex-row justify-between">
            <h4 className="relative flex w-full items-center text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
             {category.name}
             <ChevronRightIcon className="inline-block h-4 w-4 translate-x-[1px] opacity-0 duration-200 group-hover:translate-x-[5px] group-hover:opacity-100 motion-reduce:transition-none" />
            </h4>
            <p className="w-2/4 text-left text-gray-500 duration-200 motion-reduce:transition-none md:mb-0 md:text-right">{category.date}</p>
           </div>
           <p className="mt-2 text-slate-600 duration-200 motion-reduce:transition-none dark:text-slate-400">{category.description || "Nothing to say..."}</p>
           {category.preview && category.preview.images.length > 0 && (
            <div className="relative flex -space-x-4 pt-2 group-hover:-space-x-3">
             {category.preview.images.map((image, index) => (
              <>
               {/* <BlurPreview key={`${index}-image-prev`} image={image} /> */}
               <div key={`${index}-image-prev`} />
              </>
             ))}
             {category.count - category.preview.images.length > 0 && <p className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#edeeef] bg-[#edeeef] font-poppins text-xs font-medium text-gray-600 duration-200 group-hover:border-[#f6f6f7] group-hover:bg-[#f0eff0] motion-reduce:transition-none dark:border-[#343c4d] dark:bg-[#2b3342] dark:text-gray-300 dark:group-hover:border-[#4a5367] dark:group-hover:bg-[#343c4d]">+{category.count - category.preview.images.length}</p>}
            </div>
           )}
          </article>
         </a>
        </NextLink>
       ))}
      </>
     )
    ) : (
     <>
      {Array.from({ length: 1 }).map((_, index) => (
       <div key={index} className="mb-4 h-[140px] w-full animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-200/[15%] dark:text-white" />
      ))}
     </>
    )}
   </section>
  </Container>
 );
}
