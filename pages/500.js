import LinkButton from "@components/LinkButton";
import Container from "@components/Container";

export default function server_error() {
 return (
  <Container>
   <main className="flex-1 flex flex-col bg-[#040d21] justify-center items-center min-h-screen">
    <div className="p-[30px] rounded-[10px] border-[1px] border-white/[15%] bg-gradient-to-r from-[#a2facf09] to-[#64acff0d]">
     <h1 className="font-poppins bg-clip-text mt-0 mx-0 text-[2.2rem] bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone font-semibold text-fill-transparent">
      5XX <span className="opacity-70 font-normal">-</span> Server fatal error!
     </h1>
     <p className="font-poppins text-center text-slate-400 mt-2">We're sorry — Server-side error occurred.</p>
     <LinkButton href="/" text="Go back to the homepage" />
    </div>
   </main>
  </Container>
 );
}
