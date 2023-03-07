import { getPhotography } from "lib/functions";
import { BlurImage } from "components/elements/BlurImage";
import Link from "next/link";

export async function PhotographyList() {
 const photos = await getPhotography();
 return (
  <>
   {!photos || photos.length === 0 ? (
    <p className="mb-4 font-inter text-rose-500">No images found! Please try again later!</p>
   ) : (
    photos.map((result, id) => (
     <Link key={id} href={`${result.path}`} target="_blank" className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in rounded-lg bg-slate-100 bg-cover after:pointer-events-none after:absolute after:inset-0 after:rounded-lg dark:bg-slate-800">
      <BlurImage src={result.path} blur={result.blur} alt={result.id + "image"} />
     </Link>
    ))
   )}
  </>
 );
}
