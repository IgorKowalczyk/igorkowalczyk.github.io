import NextLink from "next/link";

export default function Footer() {
 return (
  <footer className="mx-auto mb-8 mt-10 flex w-full max-w-2xl flex-col justify-center">
   <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800 duration-200" />
   <div className="flex flex-col items-center justify-center">
    <NextLink href="/">
     <a>
      <p className="text-center font-poppins font-semibold text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Igor Kowalczyk</p>
     </a>
    </NextLink>
   </div>
  </footer>
 );
}
