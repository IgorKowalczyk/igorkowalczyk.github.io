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
    codeDark: "0 10px 70px -4px rgba(0, 134, 245, 0.2)",
    codeLight: "0 10px 70px -4px rgba(51, 111, 239, 0.3)",
   },
  },
 },
 plugins: [require("tailwindcss-text-fill")],
};
