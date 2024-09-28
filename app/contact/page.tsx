import { ButtonTertiary } from "@/components/Button";
import { ContactForm } from "@/components/client/ContactForm";
import { Description, Header2 } from "@/components/Headers";
import { contact } from "@/config";

export const metadata = {
 title: "Contact",
 description: "If you have a project in mind, or just want to say hi, feel free to send me a message.",
};

export default function Page() {
 return (
  <div className="mb-16 mt-20">
   <section className="mb-12">
    <Header2 id="contact">Contact me</Header2>
    <Description>I’m always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.</Description>

    <div className="my-6 flex w-full rounded-md border border-black/15 bg-white p-5 dark:border-neutral-800 dark:bg-[#161617]">
     <ContactForm />
    </div>
    <Description>Or contact me with...</Description>
    <div className="mt-4 flex flex-wrap gap-4">
     {contact.links.map((element) => (
      <ButtonTertiary href={element.href} key={`contact-link-${element.href}`} className="gap-2">
       {element.icon} {element.title}
      </ButtonTertiary>
     ))}
    </div>
   </section>
  </div>
 );
}
