"use client";

import Button from "components/elements/Button";
import Balancer from "react-wrap-balancer";

export default function Error({ error, reset }) {
 return (
  <div className="-mt-24 flex min-h-screen flex-1 flex-col items-center justify-center px-8">
   <div className="max-w-4xl rounded-[10px] border-[1px] border-black/[30%] bg-gradient-to-r p-[30px] shadow-2xl dark:border-white/[15%] dark:from-[#a2facf09] dark:to-[#64acff0d]">
    <div>
     <h1 className="mx-0 mt-0 bg-gradient-to-r from-[#ff7170] to-[#ffe57f] box-decoration-clone bg-clip-text text-center font-inter text-3xl font-semibold text-fill-transparent">Ughh, an unexpected error!</h1>
     <p className="mt-3 text-center font-inter text-slate-400">
      <Balancer ratio={0.5}>{error.message.toString() || "Oh no, something went wrong... maybe refresh?"}</Balancer>
     </p>
    </div>
    <div className="mt-3 flex justify-center">
     <Button onClick={reset()}>Reload</Button>
    </div>
   </div>
  </div>
 );
}
