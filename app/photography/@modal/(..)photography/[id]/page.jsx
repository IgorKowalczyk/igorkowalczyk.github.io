import { BlurImage } from "components/elements/BlurImage";
import Modal from "components/elements/Modal2";
import { getPhotography } from "lib/functions";

export default async function PhotoPage({ params: { id } }) {
 const photo = await getPhotography(id);

 return (
  <Modal>
   <div className="max-w-xl pt-20">
    <BlurImage src={photo.path} blur={photo.blur} alt={photo.id + "image"} />
   </div>
  </Modal>
 );
}
