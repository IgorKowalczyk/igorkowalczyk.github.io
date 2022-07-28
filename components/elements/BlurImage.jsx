import Image from "next/image";
import { useState } from "react";

export function BlurImage({ image }) {
 const [isLoading, setLoading] = useState(true);
 return <Image src={image.url} alt={image.name} className={`${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"} rounded-lg bg-zinc-200 duration-200 group-hover:opacity-75 dark:bg-zinc-200/[15%]`} onLoadingComplete={() => setLoading(false)} layout="fill" objectFit="cover" />;
}
