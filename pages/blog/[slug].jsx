import MDXComponents from "@/components/MDX/Components";
import Image from "next/image";
import { Container } from "@components/elements/Container";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import { parseISO, format } from "date-fns";
import { meta, social } from "@/config";

export default function Post({ post }) {
 const Component = useMDXComponent(post.body.code);

 return (
  <Container title={`${meta.title} - ${post.title} `} description={post.summary} image={`${meta.url}${post.image}`} date={new Date(post.publishedAt).toISOString()} type="article">
   <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
    <header>
     <h1 className="mt-6 mb-2 flex items-center justify-center box-decoration-clone bg-clip-text text-center font-poppins text-[2.5rem] font-semibold motion-reduce:transition-none">
      {post.title}
      <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
     </h1>
     <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
      <p>
       <div className="flex items-center">
        <Image alt={meta.title} height={24} width={24} src="/assets/avatar.png" className="rounded-full" />
        <time className="ml-2 text-sm text-gray-700 dark:text-gray-300" dateTime={parseISO(post.publishedAt)}>
         {post.author} / {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
        </time>
       </div>
      </p>
      <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
       {post.wordCount} words • {post.readingTime.text}
      </p>
     </div>
    </header>
    <section className="prose mt-8 w-full max-w-none dark:prose-dark">
     <Component components={{ ...MDXComponents }} />
    </section>
    <div className="flex w-full justify-end py-4 text-gray-700 dark:text-gray-300">
     <a href={`https://github.com/${social.github.username}/${social.github.repo}/edit/main/data/blog/${post.slug}.mdx`} target="_blank" rel="noopener noreferrer">
      Suggest a change
     </a>
    </div>
   </article>
  </Container>
 );
}

export async function getStaticPaths() {
 return {
  paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
  fallback: false,
 };
}

export async function getStaticProps({ params }) {
 const post = allBlogs.find((post) => post.slug === params.slug);

 return { props: { post } };
}
