import Image, { ImageProps } from "next/image";
import { useMDXComponent } from "next-contentlayer2/hooks";

const components = {
 Image: (props: ImageProps) => <Image className="rounded-lg" {...props} />,
};

export function MDXComponent({ code }) {
 const Component = useMDXComponent(code);

 return (
  <article className="prose-quoteless prose prose-neutral dark:prose-invert">
   <Component components={{ ...components }} />
  </article>
 );
}
