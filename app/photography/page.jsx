import { Description, Header1 } from "components/Headers";
import { getPhotography } from "lib/getPhotography";
import Image from "next/image";

export const metadata = {
 title: "Photography",
};

export default async function Photography() {
 const photos = await getPhotography();

 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <Header1>My photography</Header1>
   <Description className="mb-6">I love taking pictures, I love traveling, I love capturing the most beautiful moments. Here you can see some of my best photos.</Description>

   <div className="w-full columns-2 gap-6 pt-2 md:columns-2xs">{!photos || photos.length === 0 ? <p className="mb-4 text-rose-500">No images found!</p> : photos.map((result, id) => <Image key={id} className="mb-5 scale-100 transform rounded-lg bg-gray-200 blur-0 duration-200 will-change-auto hover:brightness-90 dark:bg-neutral-200/15" src={result.path} alt={result.alt} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />)}</div>
  </div>
 );
}
