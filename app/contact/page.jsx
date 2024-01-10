import { Contact } from "@/components/client/Contact";
import { Dots, Squares } from "@/components/Decorations";
import { Description, Header1 } from "@/components/Headers";

export const metadata = {
 title: "Contact",
};

export default function ContactPage() {
 return (
  <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
   <div className="absolute right-full top-full z-[-1] -translate-y-1/4 translate-x-1/2 transform lg:translate-x-1/2 xl:-translate-y-1/2">
    <Squares w="404" h="404" />
   </div>
   <span className="absolute right-0 top-[90px] z-[-1] fill-black/40 dark:fill-neutral-800">
    <Dots h="107" w="134" />
   </span>
   <div className="shadow-code rounded-[10px] border-[1px] border-black/15 bg-white p-5 shadow-lg duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
    <Header1 className="text-center">Contact me</Header1>
    <Description className="mb-5 text-center">I am always open to new opportunities and projects. Feel free to contact me!</Description>
    <Contact />
   </div>
  </div>
 );
}
