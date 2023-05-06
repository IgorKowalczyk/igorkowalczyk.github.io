import { BlurImage } from "components/elements/BlurImage";
import Button from "components/elements/Button";
import { getPhotography } from "lib/functions";
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
   <BlurImage src={photo.path} blur={photo.blur} alt={photo.id + "image"} />
  </div>
 );
}
