const plugin = require("tailwindcss/plugin");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
 darkMode: "class",
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./config.js"],
 theme: {
  extend: {
   fontFamily: {
    poppins: ["Poppins", "sans-serif"],
   },
   backgroundImage: {
    "main-dark": "linear-gradient(180deg, rgb(4, 13, 33) 84%, rgb(13, 25, 48) 100%)",
    "main-white": "linear-gradient(180deg, rgb(255 255 255) 84%, rgb(233, 243, 255) 100%)",
   },
   backgroundSize: {
    6: "24px",
    "6-1/2": "22px",
   },
   boxShadow: {
    hoverDark: "0 2px 30px -4px rgba(0, 134, 245, 1)",
    hoverLight: "0 2px 30px -4px rgba(51, 111, 239, 1)",
    codeDark: "0 30px 100px -4px rgba(0, 134, 245, 0.1)",
    codeLight: "0 30px 100px -4px rgba(51, 111, 239, 0.2)",
    fadeSectionLight: "0 -10rem 6rem -2rem rgb(255, 255, 255) inset",
    fadeSectionDark: "0 -10rem 6rem -2rem rgb(4, 13, 33) inset",
   },
   animation: {
    cursor: "cursor .75s infinite",
    fade: "fade 1s",
   },
   keyframes: {
    cursor: {
     "0%, 45%": { opacity: 1 },
     "50%, 100%": { opacity: 0 },
    },
    fade: {
     "0%": { opacity: 0 },
     "100%": { opacity: 1 },
    },
   },
   screens: {
    smallDesktop: "1013px",
    bigPhone: "767px",
   },
  },
 },
 plugins: [
  plugin(function ({ matchUtilities }) {
   matchUtilities({
    "bg-grid": (value) => ({
     backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
    }),
   });
  }),
  require("tailwindcss-text-fill"),
  require("tailwind-gradient-mask-image"),
  require("@headlessui/tailwindcss"),
  require("@igorkowalczyk/is-browser"),
 ],
};
