import { Container } from "@/components/elements/Container";
import { meta } from "@/config";
import { BlurImage } from "@/components/elements/BlurImage";
import { SWR } from "@lib/swr";

export default function Images({ props }) {
 const { data: _previews } = SWR(`/api/photography/bologna`);
 const previews = _previews ? _previews : null;

 return (
  <Container title={`${meta.title} `}>
   {_previews ? (
    previews && (
     <>
      <h1 className="mt-6 mb-2 flex items-center justify-center box-decoration-clone bg-clip-text px-8 text-center font-poppins text-[2rem] font-semibold motion-reduce:transition-none">
       {previews.name}
       <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
      </h1>
      <p className="pb-4 text-center font-poppins italic text-slate-600 dark:text-slate-400">{previews.date}</p>
      <p className="pb-6 text-center font-poppins text-slate-600 dark:text-slate-400">{previews.description}</p>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
       <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {previews.images.map((image, index) => (
         <a href={image.url} target="_blank" rel="noreferrer" className="group" key={index}>
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
           <BlurImage key={index} image={image} />
          </div>
         </a>
        ))}
       </div>
      </div>
     </>
    )
   ) : (
    <>
     <div className="mx-auto h-12 w-1/4 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-200/[15%]" />
     <div className="mx-auto mt-4 h-6 w-1/4 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-200/[15%]" />
     <div className="my-6  mx-auto h-6 w-2/4 animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-200/[15%]" />
     <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
       {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
         <div className="animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-200/[15%]" />
        </div>
       ))}
      </div>
     </div>
    </>
   )}
  </Container>
 );
}
