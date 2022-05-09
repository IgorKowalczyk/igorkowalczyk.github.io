module.exports = {
 darkMode: "class",
 content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    poppins: ["Poppins", "sans-serif"],
   },
   boxShadow: {
    hover: "0 2px 30px -4px rgba(0, 134, 245, 1)",
   },
  },
 },
 plugins: [require("tailwindcss-text-fill")],
};
