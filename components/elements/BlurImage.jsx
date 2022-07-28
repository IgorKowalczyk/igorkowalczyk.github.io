import Image from "next/image";
import { useState } from "react";

export function BlurImage({ image }) {
 const [isLoading, setLoading] = useState(true);
 return <Image src={image.url} alt={image.name} className={`${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"} bg-zinc-200 dark:bg-zinc-200/[15%] rounded-lg duration-200 group-hover:opacity-75`} onLoadingComplete={() => setLoading(false)} layout="fill" objectFit="cover" />;
}
