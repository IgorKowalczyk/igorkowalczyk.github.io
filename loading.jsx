export default function Loading() {
 return (
  <div className="flex h-screen items-center justify-center">
   <div className="flex flex-col items-center justify-center">
    <div className="mb-4 flex h-12 w-12 animate-spin items-center justify-center rounded-full bg-gradient-to-r from-[#ff7170] to-[#ffe57f]">
     <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
     </svg>
    </div>
    <p className="text-center font-inter text-slate-400">Loading...</p>
   </div>
  </div>
 );
}
