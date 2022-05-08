import Link from "next/link";
import PropTypes from "prop-types";

export default function LinkButton({ href, text, theme }) {
 const themes = {
  default: "border-white/[15%] bg-white/[5%] hover:bg-white/[10%] text-white",
  info: "border-sky-300 bg-sky-100/[10%] hover:bg-sky-100/[20%] text-white",
  success: "border-green-400 bg-green-400/[10%] hover:bg-green-400/[20%] text-white",
  warning: "border-yellow-200 bg-yellow-200/[10%] hover:bg-yellow-200/[20%] text-white",
  danger: "border-rose-400 bg-rose-400/[10%] hover:bg-rose-400/[20%] text-white",
 };
 return (
  <Link href={href}>
   <a className={themes[theme] + " mt-5 transition ease-in-out duration-200 p-2 rounded-[5px] border-[1px] font-poppins font-semibold text-center flex items-center justify-center"}>{text}</a>
  </Link>
 );
}

LinkButton.propTypes = {
 href: PropTypes.string,
 text: PropTypes.string,
 theme: PropTypes.oneOf(["default", "info", "success", "warning", "danger"]),
};

LinkButton.defaultProps = {
 href: "/",
 text: "Button",
 theme: "default",
};
