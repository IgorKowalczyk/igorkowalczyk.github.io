import { ButtonSecondary } from "@/components/Button";

export default function NotFound() {
 return (
  <div className="mb-16 mt-20">
   <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-4xl font-black tracking-[-0.03em] text-fill-transparent">404 - Page not found</h1>
   <p className="mb-4 mt-2 text-lg text-neutral-700 dark:text-neutral-400">We're sorry — we can't find the page you're looking for.</p>
   <ButtonSecondary href="/">Go home</ButtonSecondary>
  </div>
 );
}
