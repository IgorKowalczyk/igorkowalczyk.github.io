import NextLink from "next/link";
import { version } from "react";
import { useState, useEffect } from "react";
import { footer } from "@/config";

export function Footer() {
 const [appVersion, setAppVersion] = useState();
 useEffect(() => {
  setAppVersion(process.env.VERSION);
 }, [appVersion]);

 return (
  <footer className="mt-12 w-full py-10 lg:px-16">
   <div className="mx-auto pt-10">
    <div className="gap-20 lg:grid lg:grid-cols-6">
     <div className="col-span-3 flex flex-col justify-center">
      <div className="flex items-center space-x-5">
       {/* DO NOT TOUCH THE CODE BELOW! REMEMBER: YOU CAN ADD YOUR NAME AFTER MY NAME */}
       <NextLink href="/">
        <p className="flex cursor-pointer items-center text-2xl font-semibold">
         Igor Kowalczyk<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span> <span className="mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10">v{appVersion}</span>
        </p>
       </NextLink>
      </div>

      <p className="mt-3 text-gray-700 dark:text-gray-400">
       Created with ❤️ in Poland using{" "}
       <NextLink href="https://reactjs.org">
        <a>React.js v{version}</a>
       </NextLink>
      </p>
     </div>
     {footer.categories.map((category, index) => (
      <div key={index} className="col-span-1 text-gray-700 dark:text-gray-400">
       <p className="mt-3 font-semibold text-gray-800 dark:text-white sm:mt-0 sm:mb-3">{category.title}</p>
       <div>
        {category.links.map((link, index) => (
         <NextLink key={index} href={link.href}>
          <a className="mt-2 block duration-100 hover:text-gray-600 hover:underline motion-reduce:transition-none dark:hover:text-gray-300">{link.title}</a>
         </NextLink>
        ))}
       </div>
      </div>
     ))}
    </div>
    <div className="mt-5 flex justify-end text-center text-gray-700 dark:text-gray-400">
     <p className="font-semibold">&copy; 2019 - {new Date().getFullYear()} Igor Kowalczyk, All rights reserved.</p>
    </div>
   </div>
  </footer>
 );
}
