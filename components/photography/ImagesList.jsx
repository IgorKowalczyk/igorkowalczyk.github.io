import Link from "next/link";
import { CameraIcon } from "@heroicons/react/24/solid";
import { parseISO, format } from "date-fns";
import { BlurPreview } from "@components/elements/BlurImage";

export function ListElement({ title, description, slug, publishedAt, index, preview, count }) {
 return (
  <Link href={`/photography/${slug}`}>
   <a className="w-full">
    <li className="group mb-10 ml-6 -mt-3 rounded-2xl px-6 py-3 duration-200 hover:bg-zinc-200/50 motion-reduce:transition-none dark:hover:bg-white/10">
     <span className="absolute -left-3  flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-[#040d21]">
      <CameraIcon className="h-3 w-3 text-blue-700 dark:text-blue-400" />
     </span>
     <header>
      <h3 className="mb-1 flex items-center text-lg font-semibold text-slate-900 dark:text-white">
       {title} {index === 0 && <span className="mr-2 ml-3 rounded bg-blue-200 px-2.5 py-0.5 text-sm font-medium dark:bg-white/10">🔥 Latest</span>}
      </h3>
      <time className="mb-2 block text-sm font-normal leading-none text-slate-500 dark:text-slate-500" dateTime={parseISO(publishedAt)}>
       {format(parseISO(publishedAt), "MMMM dd, yyyy")}
      </time>
     </header>
     <p className=" text-base font-normal text-slate-600 dark:text-slate-400">{description}</p>
     {preview && preview.length > 0 && (
      <div className="relative mb-2 flex -space-x-4 pt-2 group-hover:-space-x-3">
       {preview.map((image, index) => (
        <BlurPreview key={`${index}-image-prev`} image={image} />
       ))}
       {count - preview.length > 0 && <p className="z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#edeeef] bg-[#edeeef] font-poppins text-xs font-medium text-gray-600 duration-200 group-hover:border-[#f6f6f7] group-hover:bg-[#f0eff0] motion-reduce:transition-none dark:border-[#343c4d] dark:bg-[#2b3342] dark:text-gray-300 dark:group-hover:border-[#4a5367] dark:group-hover:bg-[#343c4d]">+{count - preview.length}</p>}
      </div>
     )}
     <p className="inline-flex text-sm font-semibold text-[#1491ff]">Show more</p>
    </li>
   </a>
  </Link>
 );
}
