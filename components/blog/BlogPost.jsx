import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { parseISO, format } from "date-fns";

export function BlogPost({ title, summary, slug, publishedAt }) {
 return (
  <Link href={`/blog/${slug}`}>
   <a className="w-full">
    <div className="group flex w-full flex-col justify-between rounded-md bg-zinc-200/[25%] px-6 py-4 duration-200 hover:bg-zinc-200/60 motion-reduce:transition-none dark:bg-white/[10%] dark:text-white dark:hover:bg-white/[15%]">
     <div className="flex flex-row justify-between">
      <h4 className="relative flex w-full items-center text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
       {title}
       <ChevronRightIcon className="inline-block h-4 w-4 translate-x-[1px] opacity-0 duration-200 group-hover:translate-x-[5px] group-hover:opacity-100 motion-reduce:transition-none" />
      </h4>
      <p className="w-2/4 text-left text-gray-500 duration-200 motion-reduce:transition-none md:mb-0 md:text-right">{format(parseISO(publishedAt), "MMMM dd, yyyy")}</p>
     </div>
     <p className="mt-2 text-slate-600 duration-200 motion-reduce:transition-none dark:text-slate-400">{summary || "Nothing to say..."}</p>
    </div>
   </a>
  </Link>
 );
}
