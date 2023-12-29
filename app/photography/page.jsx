import { Description, Header1 } from "components/Headers";
import { getPhotography } from "lib/getPhotography";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
 title: "Photography",
};

export default async function Photography() {
 const photos = await getPhotography();

 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <Header1>My photography</Header1>
   <Description className="mb-6">I love taking pictures, I love traveling, I love capturing the most beautiful moments. Here you can see some of my best photos.</Description>

   <div className="w-full columns-2 gap-6 pt-2 md:columns-2xs">
    {!photos || photos.length === 0 ? (
     <p className="mb-4 text-red-400">No images found!</p>
    ) : (
     photos.map((result, id) => (
      <Link key={id} href={result.path} target="_blank" rel="noopener noreferrer">
       <Image className="mb-5 cursor-zoom-in rounded-lg bg-gray-200 blur-0 duration-200 hover:opacity-70 dark:bg-neutral-200/15" src={result.path} alt={result.alt} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />
      </Link>
     ))
    )}
   </div>
  </div>
 );
}
