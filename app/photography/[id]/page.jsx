import Button from "components/elements/Button";
import { getPhotography } from "lib/getPhotography";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PhotoPage({ params: { id } }) {
 const photo = await getPhotography(id);

 if (!photo) {
  return notFound();
 }

 return (
  <div className="mx-auto mb-16 flex flex-col items-start justify-center">
   <h1 className="mb-4 flex w-full items-center justify-center box-decoration-clone bg-clip-text text-center  text-[2rem] font-semibold motion-reduce:transition-none">
    Photo nr {id}
    <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
   </h1>
   <div className="mb-6 flex w-full flex-col items-center justify-center">
    <Button href="/photography">Back to photography</Button>
   </div>
   <Image className="scale-100 transform rounded-lg bg-zinc-200 blur-0 duration-200 will-change-auto hover:brightness-90  dark:bg-zinc-200/[15%]" src={photo.path} alt={photo.path} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />
  </div>
 );
}
