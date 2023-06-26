import Modal from "components/elements/client/Modal";
import { getPhotography } from "lib/getPhotography";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function PhotoPage({ params: { id } }) {
 const photo = await getPhotography(id);

 if (!photo) {
  return notFound();
 }

 return (
  <Modal>
   <div className="max-w-xl pt-20">
    <Image className="scale-100 transform rounded-lg bg-zinc-200 blur-0 duration-200 will-change-auto hover:brightness-90  dark:bg-zinc-200/[15%]" src={photo.path} alt={photo.path} width={720} height={480} sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw" />
   </div>
  </Modal>
 );
}
