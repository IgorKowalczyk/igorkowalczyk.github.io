import Button from "components/elements/Button";

export default function NotFound() {
 return (
  <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
   <div className="rounded-[10px] border-[1px] border-black/[30%] bg-gradient-to-r p-[30px] shadow-2xl dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
    <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text font-inter text-[2.2rem] font-semibold text-fill-transparent">404 - Page not found</h1>
    <p className="mt-2 text-center font-inter text-slate-400">We're sorry — we can't find the page you're looking for.</p>
    <div className="mt-2 flex justify-center">
     <Button href="/">Go back</Button>
    </div>
   </div>
  </div>
 );
}
