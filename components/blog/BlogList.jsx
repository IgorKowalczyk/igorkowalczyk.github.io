import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/solid";
import { parseISO } from "../../lib/utils";

export function ListElement({ title, summary, slug, publishedAt, index }) {
 return (
  <Link href={`/blog/${slug}`} className="w-full">
   <li className="mb-10 ml-6 -mt-3 rounded-2xl px-6 py-3 duration-200 hover:bg-zinc-200/50 motion-reduce:transition-none dark:hover:bg-white/10">
    <span className="absolute -left-3 flex  h-6 w-6 items-center justify-center rounded-full bg-blue-200 font-inter ring-8 ring-white dark:bg-blue-900 dark:ring-[#040d21]">
     <CalendarIcon className="h-3 w-3 text-blue-700 dark:text-blue-400" />
    </span>
    <header>
     <h3 className="mb-1 flex items-center font-inter text-lg font-semibold text-slate-900 dark:text-white">
      {title} {index === 0 && <span className="mr-2 ml-3 rounded bg-blue-200 py-0.5 pr-2.5 pl-1.5 text-sm font-medium dark:bg-white/10">🔥 Latest</span>}
     </h3>
     <time className="mb-2 block font-inter text-sm font-normal leading-none text-slate-500 dark:text-slate-500" dateTime={new Date(publishedAt).toUTCString()}>
      {parseISO(publishedAt)}
     </time>
    </header>
    <p className="mb-2 font-inter text-base font-normal text-slate-600 dark:text-slate-400">{summary}</p>
    <p className="inline-flex font-inter text-sm font-semibold text-[#1491ff]">Read more</p>
   </li>
  </Link>
 );
}
