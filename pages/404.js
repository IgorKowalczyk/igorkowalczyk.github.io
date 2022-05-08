import LinkButton from "@components/LinkButton";
import Container from "@components/Container";

export default function not_found() {
 return (
  <Container>
   <main className="flex min-h-screen flex-1 flex-col items-center justify-center bg-[#040d21]">
    <div className="rounded-[10px] border-[1px] border-white/[15%] bg-gradient-to-r from-[#a2facf09] to-[#64acff0d] p-[30px]">
     <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text font-poppins text-[2.2rem] font-semibold text-fill-transparent">
      404 <span className="font-normal opacity-70">-</span> Page not found
     </h1>
     <p className="mt-2 text-center font-poppins text-slate-400">We're sorry — we can't find the page you're looking for.</p>
     <LinkButton href="/" text="Go back to the homepage" />
    </div>
   </main>
  </Container>
 );
}
