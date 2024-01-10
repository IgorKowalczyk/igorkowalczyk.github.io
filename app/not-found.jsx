import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";

export default function NotFound() {
 return (
  <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
   <div className="max-w-4xl rounded-md border border-neutral-200 px-9 py-6 shadow-2xl duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
    <div className="mx-auto mb-3 w-fit rounded-full border border-neutral-200 p-3 dark:border-neutral-800">
     <ExclamationTriangleIcon className="h-10 w-10 text-red-400" />
    </div>
    <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-center text-3xl font-semibold text-fill-transparent">404 - Page not found</h1>
    <p className="mt-3 text-center text-neutral-800 dark:text-neutral-200">We're sorry — we can't find the page you're looking for.</p>
    <Button href="/" className="mx-auto">
     Go home
    </Button>
   </div>
  </div>
 );
}
