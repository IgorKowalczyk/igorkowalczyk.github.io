import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

const components = {
 Image: (props) => <Image alt={props.alt} className="rounded-lg" {...props} />,
};

export function MDXComponent({ code }) {
 const Component = useMDXComponent(code);

 return (
  <article className="prose-quoteless prose prose-neutral dark:prose-invert">
   <Component components={{ ...components }} />
  </article>
 );
}
