import Image from "next/image";
import { CustomLink } from "components/elements/CustomLink";

function CustomImage(props) {
 return <Image alt={props.alt} {...props} />;
}

function RoundedImage(props) {
 return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
 return (
  <div className="my-8 flex rounded-lg bg-gray-200 p-4 dark:bg-gray-800">
   <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
   <div className="callout w-full">{props.children}</div>
  </div>
 );
}

const MDXComponents = {
 Image: CustomImage,
 RoundedImage,
 Link: CustomLink,
 Callout,
};

export default MDXComponents;
