import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = (props) => {
 const href = props.href;

 if (href.startsWith("/")) {
  return (
   <Link href={href} {...props}>
    {props.children}
   </Link>
  );
 }

 if (href.startsWith("#")) {
  return <a {...props} />;
 }

 return <Link target="_blank" rel="noopener noreferrer" {...props} />;
};

function RoundedImage(props) {
 return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
 return (
  <div className="my-8 flex rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900">
   <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
   <div className="callout w-full">{props.children}</div>
  </div>
 );
}

const components = {
 Image: RoundedImage,
 a: CustomLink,
 Link: CustomLink,
 Callout,
};

export function MDXComponent({ code }) {
 const Component = useMDXComponent(code);

 return (
  <article className="prose-quoteless prose prose-neutral dark:prose-invert">
   <Component components={{ ...components }} />
  </article>
 );
}
