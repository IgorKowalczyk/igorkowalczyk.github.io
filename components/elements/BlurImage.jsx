import Image from "next/image";
import * as FutureImage from "next/future/image";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
// Todo: wait for layout="raw" to be supported by Next.js

export function BlurImage({ image }) {
 const [isLoading, setLoading] = useState(true);
 return (
  <div className="group">
   <Image src={image.url} alt={image.name} className={`${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"} rounded-lg bg-zinc-200 duration-200 group-hover:opacity-75 dark:bg-zinc-200/[15%]`} onLoadingComplete={() => setLoading(false)} layout="fill" objectFit="cover" />
   <div className="absolute inset-0 flex items-center justify-center opacity-0 duration-300 group-hover:opacity-100 motion-reduce:transition-none">
    <PlusIcon className="h-9 w-9 text-white" />
   </div>
  </div>
 );
}

export function BlurPreview({ image }) {
 const [isLoading, setLoading] = useState(true);
 return <FutureImage src={image.src} alt={image.src} className={`${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}z-[5] h-10 w-10 rounded-full border-2 border-[#e6e6e9] bg-zinc-200 duration-200 group-hover:border-[#f6f6f7] motion-reduce:transition-none dark:border-[#343c4d] dark:bg-zinc-200/[15%] dark:group-hover:border-[#474f63]`} onLoadingComplete={() => setLoading(false)} layout="raw" height="40" width="40" />;
}
