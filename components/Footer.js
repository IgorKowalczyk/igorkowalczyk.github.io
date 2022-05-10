import Carbonbadge from "react-carbonbadge";

export default function Footer() {
 return (
  <footer className="mx-auto mb-8 mt-10 flex w-full max-w-2xl flex-col justify-center">
   <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
   <div className="flex flex-col items-center justify-center">
    <Carbonbadge darkMode={true} />
    <p className="text-center font-poppins font-semibold text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Igor Kowalczyk</p>
   </div>
  </footer>
 );
}
