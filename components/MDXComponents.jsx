import Image from "next/image";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";

const CustomLink = ({ href, content }) => {
 const isInternalLink = href?.startsWith("/");
 const isAnchorLink = href?.startsWith("#");

 if (isInternalLink) {
  return <Link href={href} {...content} />;
 } else {
  <a href={href} {...(isAnchorLink ? {} : { target: "_blank", rel: "noopener noreferrer" })} {...content} />;
 }
};

function Callout(props) {
 return (
  <div className="my-8 flex rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-900">
   <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
   <div className="callout w-full">{props.children}</div>
  </div>
 );
}

const components = {
 Image: (props) => <Image alt={props.alt} className="rounded-lg" {...props} />,
 a: CustomLink,
 Link: CustomLink,
 Callout: Callout,
};

export function MDXComponent({ code }) {
 const Component = useMDXComponent(code);

 return (
  <article className="prose-quoteless prose prose-neutral dark:prose-invert">
   <Component components={{ ...components }} />
  </article>
 );
}
