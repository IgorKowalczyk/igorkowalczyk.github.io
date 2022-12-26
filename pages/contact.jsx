import { meta } from "/config";
import { Container } from "components/elements/Container";
import { Contact } from "components/elements/Contact";

export default function ContactPage() {
 return (
  <Container title={`${meta.title} - Contact`}>
   <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
    <div className="rounded-[10px] border-[1px] border-black/[30%] bg-gradient-to-r p-[30px] shadow-2xl dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
     <header className="pb-6">
      <h1 className="mt-6 mb-2 flex items-center justify-center box-decoration-clone bg-clip-text px-8 text-center font-inter text-4xl font-semibold motion-reduce:transition-none">
       Contact me <span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span>
      </h1>
      <p className="py-1 text-center font-inter  text-base text-gray-600 dark:text-gray-300">Want to order a project? Or do you just want to stay in touch?</p>
     </header>
     <Contact />
    </div>
   </div>
  </Container>
 );
}
