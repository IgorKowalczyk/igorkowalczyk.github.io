import Avatar from "/public/assets/avatar.png";
import { allBlogs } from "contentlayer/generated";
import { parseISO } from "@/lib/utils";
import { meta } from "@/config";
import { MDXComponent } from "@/components/MDXComponents";
import Image from "next/image";
import Link from "next/link";
import "styles/blog.css";
import { notFound } from "next/navigation";
import { Header1 } from "@/components/Headers";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export function generateStaticParams() {
 return allBlogs.map((post) => ({
  slug: post.slug,
 }));
}

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
 const post = allBlogs.find((post) => post?.slug === params?.slug);

 if (!post) return {};

 const { title, publishedAt: publishedTime, summary: description, slug } = post;

 return {
  title,
  description,
  openGraph: {
   title,
   description,
   type: "article",
   publishedTime,
   url: `${meta.url}/blog/${slug}`,
  },
  twitter: {
   card: "summary_large_image",
   title,
   description,
  },
 };
}

export default function Blog({ params }) {
 const post = allBlogs.find((post) => post.slug === params.slug);

 if (!post) return notFound();

 return (
  <article className="mb-16 mt-20 flex min-h-screen flex-col items-start justify-center">
   <script
    type="application/ld+json"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: We trust the content of the JSON object
    dangerouslySetInnerHTML={{
     __html: JSON.stringify(post?.structuredData),
    }}
   />
   <div className="prose grid flex-1 grid-cols-1 dark:prose-dark md:grid-cols-[1fr,minmax(auto,640px),1fr] md:[&>*]:col-start-2">
    <div>
     <header className="w-full">
      <Header1>{post.title}</Header1>
      <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
       <div className="flex items-center">
        <Image alt={meta.title} height={24} width={24} src={Avatar} className="rounded-full" />
        <time className="ml-2 text-sm text-gray-700 dark:text-neutral-300" dateTime={new Date(post.publishedAt).toUTCString()}>
         {post.author} / {parseISO(post.publishedAt)}
        </time>
       </div>
       <p className="mt-2 min-w-32 text-sm text-gray-700 dark:text-neutral-300 md:mt-0">
        {post.wordCount} words • {post.readingTime?.text}
       </p>
      </div>
     </header>
     <MDXComponent code={post.body.code} />
    </div>
    <div className="sticky top-24 !col-start-3 ml-12 mt-8 hidden max-w-56 flex-col space-y-2 self-start text-base xl:flex">
     <p className="mb-0 text-sm uppercase">On this page</p>
     {post.headings.map((props) => (
      <Link
       key={props.slug}
       href={`#${props.slug}`}
       className={cn(
        {
         "ml-2": props.size === 2,
         "ml-4": props.size === 3,
        },
        "!font-normal no-underline opacity-50 duration-200 hover:underline hover:opacity-100 motion-reduce:transition-none"
       )}
      >
       {props.content}
      </Link>
     ))}
    </div>
   </div>
   <div className="flex w-full justify-end py-4 text-gray-700 dark:text-neutral-300">
    <Link href={`https://github.com/${meta.accounts.github.username}/${meta.accounts.github.repo}/blob/master/data/blog/${post.slug}.mdx`} target="_blank" rel="noopener noreferrer">
     Suggest a change
    </Link>
   </div>
  </article>
 );
}
