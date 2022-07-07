import NextLink from "next/link";
import { version } from "react";
import { useState, useEffect } from "react";

export function Footer() {
 const [appVersion, setAppVersion] = useState();
 useEffect(() => {
  setAppVersion(process.env.VERSION);
 }, [appVersion]);

 return (
  <footer className="mt-12 w-full py-6 md:text-center lg:px-12">
   <div className="flex w-full flex-col items-center gap-2 lg:flex-row lg:justify-between lg:gap-0">
    {/* DO NOT TOUCH THE CODE BELOW! REMEMBER: YOU CAN ADD YOUR NAME AFTER MY NAME */}
    <NextLink href="/">
     <p className="flex cursor-pointer items-center text-2xl font-semibold">
      Igor Kowalczyk<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span> <span className="mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10">v{appVersion}</span>
     </p>
    </NextLink>
    {/* --- */}
    <div className="items-center space-x-6 lg:flex">
     <div className="mt-2 text-left text-gray-700 dark:text-gray-400 lg:mt-0 lg:text-right">
      <p className="font-semibold">&copy; 2019 - {new Date().getFullYear()} Igor Kowalczyk, All rights reserved.</p>
      <p className="italic">
       Created with ❤️ in Poland using{" "}
       <NextLink href="https://reactjs.org">
        <a>React.js v{version}</a>
       </NextLink>
      </p>
     </div>
    </div>
   </div>
  </footer>
 );
}
