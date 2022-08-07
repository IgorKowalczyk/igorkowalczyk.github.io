import * as FutureImage from "next/future/image";
import { CustomLink } from "@components/elements/CustomLink";

function Image(props) {
 return <FutureImage alt={props.alt} {...props} />;
}

function RoundedImage(props) {
 return <FutureImage alt={props.alt} className="rounded-lg" {...props} />;
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
 Image,
 RoundedImage,
 Link: CustomLink,
 Callout,
};

export default MDXComponents;
