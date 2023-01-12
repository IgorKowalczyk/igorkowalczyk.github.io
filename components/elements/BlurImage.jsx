import Image from "next/image";
import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function BlurImage({ src, alt, width, height }) {
 const [isLoading, setLoading] = useState(true);
 return (
  <Image
   className={`${isLoading ? "scale-110 blur-xl" : "scale-100 blur-0 "} group-hover:brightness-75" transform rounded-lg bg-zinc-200 transition will-change-auto  dark:bg-zinc-200/[15%]`}
   src={src}
   alt="Photography"
   width={720}
   height={480}
   sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
   onLoadingComplete={() => setLoading(false)}
  />
 );
}
