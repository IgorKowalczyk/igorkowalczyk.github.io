import Link from "next/link";

export default function LinkButton(props) {
 const themes = {
  default: "border-black/[20%] dark:border-white/[15%] dark:bg-white/[5%] dark:hover:bg-white/[10%] text-black/[70%] dark:text-white",
  info: "border-sky-500 bg-sky-500/[10%] dark:border-sky-300 dark:bg-sky-100/[10%] dark:hover:bg-sky-100/[20%] text-black/[70%] dark:text-white",
  success: "border-green-400 bg-green-400/[10%] dark:border-green-400 dark:bg-green-400/[10%] dark:hover:bg-green-400/[20%] text-black/[70%] dark:text-white",
  warning: "border-yellow-300 bg-yellow-300/[20%] dark:border-yellow-200 dark:bg-yellow-200/[10%] dark:hover:bg-yellow-200/[20%] text-black/[70%] dark:text-white",
  danger: "border-rose-400 bg-rose-400/[20%] dark:border-rose-400 dark:bg-rose-400/[10%] dark:hover:bg-rose-400/[20%] text-black/[70%] dark:text-white",
 };

 return (
  <Link href={props.href || "/"}>
   <a className={themes[props.theme || "default"] + " mt-5 flex items-center justify-center rounded-[5px] border-[1px] p-2 text-center font-poppins font-semibold transition duration-200 ease-in-out"}>{props.text || "Button"}</a>
  </Link>
 );
}
