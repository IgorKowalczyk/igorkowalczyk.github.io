import { version } from "react";
import { footer } from "/config";
import Link from "next/link";

export function Footer() {
 return (
  <footer className="mt-12 w-full py-10 px-4 md:px-8 lg:px-16">
   <div className="mx-auto pt-10">
    <div className="grid grid-cols-2 gap-9 md:grid-cols-6">
     <div className="col-span-3 flex flex-col justify-center">
      <div className="flex items-center space-x-5">
       {/* DO NOT TOUCH THE CODE BELOW! REMEMBER: YOU CAN ADD YOUR NAME AFTER MY NAME */}
       <Link href="/" legacyBehavior>
        <p className="flex cursor-pointer items-center font-inter text-2xl font-semibold">
         Igor Kowalczyk<span className="bg-gradient-to-r from-[#6310ff] to-[#1491ff] box-decoration-clone bg-clip-text text-fill-transparent dark:from-[#a2facf] dark:to-[#64acff]">.</span> <span className="mx-1 mr-2 rounded-lg bg-black/[7%] px-2 py-1 text-xs dark:bg-white/10">v{process.env.VERSION}</span>
        </p>
       </Link>
      </div>

      <p className="mt-3 font-inter text-gray-700 dark:text-gray-400">
       Created with ❤️ in Poland using <Link href="https://reactjs.org">React.js v{version}</Link>
      </p>
     </div>
     {footer.categories.map((category, index) => (
      <div key={index} className="col-span-1 text-gray-700 dark:text-gray-400">
       <p className="mt-3 font-inter font-semibold text-gray-800 dark:text-white sm:mt-0 sm:mb-3 ">{category.title}</p>
       <div>
        {category.links.map((link, index) => (
         <Link key={index} href={link.href} className="mt-2 block font-inter duration-100 hover:text-gray-600 hover:underline motion-reduce:transition-none dark:hover:text-gray-300">
          {link.title}
         </Link>
        ))}
       </div>
      </div>
     ))}
    </div>
    <div className="mt-5 flex justify-end text-center font-inter text-gray-700 dark:text-gray-400">
     <p className="font-semibold">&copy; 2019 - {new Date().getFullYear()} Igor Kowalczyk, All rights reserved.</p>
    </div>
   </div>
  </footer>
 );
}
