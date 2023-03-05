"use client";

import Image from "next/image";
import { useState } from "react";

export function BlurImage({ src, alt }) {
 const [isLoading, setLoading] = useState(true);
 return (
  <Image
   className={`${isLoading ? "scale-110 blur-xl" : "scale-100 blur-0 "} transform rounded-lg bg-zinc-200 duration-200 will-change-auto hover:brightness-90  dark:bg-zinc-200/[15%]`}
   src={src}
   alt={alt}
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
