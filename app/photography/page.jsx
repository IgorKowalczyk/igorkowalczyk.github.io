import Image from "next/image";
import Link from "next/link";
import { Description, Header1 } from "@/components/Headers";
import { getPhotography } from "@/lib/getPhotography";

export const metadata = {
 title: "Photography",
 description: "Explore some of my finest photos, captured during my travels and adventures.",
};

export default async function Page() {
 const photos = await getPhotography();

 return (
  <div className="mb-16 mt-20 flex flex-col items-start justify-center">
   <Header1>My photography</Header1>
   <Description> I have a passion for photography, travel, and capturing life's most beautiful moments. Here, you can explore some of my finest photos.</Description>

   <div className="mt-12 w-full columns-2 gap-6 md:columns-2xs">
    {!photos || photos.length === 0 ? (
     <p className="mb-4 text-red-400">No images found!</p>
    ) : (
     photos.map((result) => (
      <Link key={`photo-${result.path}`} href={result.path} target="_blank">
       <Image className="mb-5 cursor-zoom-in rounded-lg bg-gray-200 blur-0 duration-200 hover:opacity-70 dark:bg-neutral-200/15" src={result.path} alt={result.alt} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />
      </Link>
     ))
    )}
   </div>
  </div>
 );
}
