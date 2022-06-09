import NextLink from "next/link";
import { config } from "@/config";

export function Footer() {
 return (
  <footer className="mx-auto mb-8 mt-10 flex w-full max-w-2xl flex-col justify-center px-8 motion-reduce:transition-none">
   <hr className="border-1 mb-8 w-full border-gray-200 duration-300 motion-reduce:transition-none dark:border-gray-800" />
   <NextLink href="/">
    <a>
     <p className="pb-6 text-center font-poppins font-semibold text-gray-600 dark:text-gray-400">{config.footer.title}</p>
    </a>
   </NextLink>
   <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
    <div className="flex flex-col space-y-4">
     {config.footer.links.left.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a target={item.target} className="text-center text-gray-500 duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80">
        {item.title}
       </a>
      </NextLink>
     ))}
    </div>
    <div className="flex flex-col space-y-4">
     {config.footer.links.center.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a target={item.target} className="text-center text-gray-500 duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80">
        {item.title}
       </a>
      </NextLink>
     ))}
    </div>
    <div className="flex flex-col space-y-4">
     {config.footer.links.right.map((item, index) => (
      <NextLink href={item.href} key={index}>
       <a target={item.target} className="text-center text-gray-500 duration-200 hover:text-gray-600 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80">
        {item.title}
       </a>
      </NextLink>
     ))}
    </div>
   </div>
  </footer>
 );
}
