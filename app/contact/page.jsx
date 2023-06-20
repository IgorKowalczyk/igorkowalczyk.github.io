import Dots from "components/decorations/Dots";
import Squares from "components/decorations/Squares";
import { Contact } from "components/elements/client/Contact";

export const runtime = "edge";

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
   <div className="shadow-code rounded-[10px] border-[1px] border-black/[15%] bg-gradient-to-r p-[30px] dark:border-neutral-800 dark:from-[#a2facf09] dark:to-[#64acff0d]">
    <header className="pb-6">
     <h1 className="mb-2 mt-6 flex items-center justify-center box-decoration-clone bg-clip-text px-8 text-center  text-4xl font-semibold motion-reduce:transition-none">
      Contact me <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
     </h1>
     <p className="py-1 text-center   text-base text-gray-600 dark:text-gray-300">Want to order a project? Or do you just want to stay in touch?</p>
    </header>
    <Contact />
   </div>
  </div>
 );
}
