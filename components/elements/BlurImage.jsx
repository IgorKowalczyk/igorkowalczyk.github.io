"use client";

import Image from "next/image";

export function BlurImage({ src, alt, blur }) {
 return <Image className={`scale-100 transform rounded-lg bg-zinc-200 blur-0 duration-200 will-change-auto hover:brightness-90  dark:bg-zinc-200/[15%]`} src={src} alt={alt} placeholder="blur" blurDataURL={blur} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />;
}
