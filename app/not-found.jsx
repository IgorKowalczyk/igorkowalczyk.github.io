export default function NotFound() {
 return (
  <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
   <div className="max-w-4xl rounded-[10px] border p-[30px] shadow-2xl duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
    <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-center  text-3xl font-semibold text-fill-transparent">404 - Page not found</h1>
    <p className="mt-3 text-center  text-slate-400">We're sorry — we can't find the page you're looking for.</p>
   </div>
  </div>
 );
}
