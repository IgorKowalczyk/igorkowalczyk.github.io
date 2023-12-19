import { MDXComponent } from "components/MDXComponents";
import { allOtherPages } from "contentlayer/generated";
import Image from "next/image";
import setup from "/public/assets/setup.jpg";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
 title: "What I use",
};

export default function Uses() {
 const uses = allOtherPages.find((page) => page.slug === "uses");

 if (!uses) return notFound();

 return (
  <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center ">
   <header>
    <h1 className="mb-3 mt-6 flex flex-wrap items-center justify-center box-decoration-clone bg-clip-text text-center text-[2rem] font-semibold motion-reduce:transition-none">
     {uses.title}
     <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </h1>
   </header>
   <p className="pb-2 text-gray-700 dark:text-neutral-300">{uses.description}</p>
   <Link href="/assets/setup.jpg" target="_blank" rel="noopener noreferrer">
    <Image src={setup} alt="My setup" className="dark:bg-neutral-200/15 my-4 scale-100 transform cursor-pointer rounded-2xl bg-gray-200 blur-0 duration-200 will-change-auto hover:opacity-70 hover:brightness-90 motion-reduce:duration-0" placeholder="blur" />
   </Link>
   <section className="prose w-full max-w-none dark:prose-dark">
    <MDXComponent code={uses.body.code} />
   </section>
  </article>
 );
}
