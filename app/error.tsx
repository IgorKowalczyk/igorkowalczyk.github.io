"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
 return (
  <div className="mb-16 mt-20">
   <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-4xl font-black tracking-[-0.03em] text-fill-transparent">Ughh, an unexpected error!</h1>
   <p className="mt-2 text-lg text-neutral-700 dark:text-neutral-400">{error.message.toString() || "Oh no, something went wrong... maybe you should refresh the page? If that doesn't work, please reach out to me."}</p>
  </div>
 );
}
