import MDXComponents from "components/MDX/Components";
import Avatar from "../../public/assets/avatar.png";
import Image from "next/image";
import { Container } from "components/elements/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPhotographies } from "contentlayer/generated";
import { parseISO } from "../../lib/utils";
import { meta } from "/config";
import { BlurImage } from "components/elements/BlurImage";

export default function Post({ post }) {
 const Component = useMDXComponent(post.body.code);
 return (
  <Container title={`${meta.title} - ${post.title} `} description={post.summary} date={new Date(post.publishedAt).toISOString()} type="article">
   <article className="mx-auto px-4 sm:px-6 lg:px-8">
    <header className="mb-6 w-full">
     <div className="mt-2 flex w-full flex-col items-center justify-center md:flex-row md:items-center">
      <div>
       <h1 className="mb-4 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-inter text-[2rem] font-semibold motion-reduce:transition-none">
        {post.title}
        <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
       </h1>
       <div className="flex items-center font-inter">
        <Image alt={meta.title} height={24} width={24} src={Avatar} className="rounded-full" />
        <time className="ml-2 text-base text-gray-700 dark:text-gray-300" dateTime={new Date(post.publishedAt).toUTCString()}>
         {post.author} / {parseISO(post.publishedAt)}
        </time>
       </div>
      </div>
     </div>
     <p className="mt-4 pb-6 text-center font-inter text-lg text-slate-600 dark:text-slate-400">{post.description}</p>
    </header>

    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
     <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <Component components={{ ...MDXComponents, BlurImage }} />
     </div>
    </div>
   </article>
  </Container>
 );
}

export async function getStaticPaths() {
 return {
  paths: allPhotographies.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
 };
}

export async function getStaticProps({ params }) {
 const post = allPhotographies.find((post) => post.slug === params.slug);

 return { props: { post } };
}
