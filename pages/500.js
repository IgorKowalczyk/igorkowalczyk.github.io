import LinkButton from "@components/LinkButton";
import Container from "@components/Container";

export default function server_error() {
 return (
  <Container>
   <main className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center">
    <div className="rounded-[10px] border-[1px] border-black/[30%] bg-gradient-to-r p-[30px] shadow-2xl dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
     <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text font-poppins text-[2.2rem] font-semibold text-fill-transparent">
      5xx - Server fatal error!
     </h1>
     <p className="mt-2 text-center font-poppins text-slate-400">We're sorry — Server-side error occurred.</p>
     <LinkButton href="/" text="Go back to the homepage" theme="default" />
     <LinkButton href="/" text="Go back to the homepage" theme="info" />
     <LinkButton href="/" text="Go back to the homepage" theme="success" />
     <LinkButton href="/" text="Go back to the homepage" theme="warning" />
     <LinkButton href="/" text="Go back to the homepage" theme="danger" />
    </div>
   </main>
  </Container>
 );
}
