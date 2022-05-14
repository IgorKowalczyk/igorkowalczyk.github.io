module.exports = {
 darkMode: "class",
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    poppins: ["Poppins", "sans-serif"],
   },
   boxShadow: {
    hoverDark: "0 2px 30px -4px rgba(0, 134, 245, 1)",
    hoverLight: "0 2px 30px -4px rgba(51,111,239, 1)",
    codeDark: "0 30px 100px -4px rgba(0, 134, 245, 0.2)",
    codeLight: "0 30px 100px -4px rgba(51, 111, 239, 0.3)",
   },
   animation: {
    cursor: "cursor .75s infinite",
   },
   keyframes: {
    cursor: {
     "0%, 45%": { opacity: 1 },
     "50%, 100%": { opacity: 0 },
    },
   },
   screens: {
    smallDesktop: "1013px",
    bigPhone: "767px",
   },
  },
 },
 plugins: [require("tailwindcss-text-fill")],
};
