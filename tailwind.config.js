const plugin = require("tailwindcss/plugin");

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
  require("tailwindcss-text-fill"),
  plugin(function ({ addVariant, e, postcss }) {
   addVariant("firefox", ({ container, separator }) => {
    const isFirefox = postcss.atRule({
     name: "-moz-document",
     params: "url-prefix()",
    });
    isFirefox.append(container.nodes);
    container.append(isFirefox);
    isFirefox.walkRules((rule) => {
     rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
    });
   });
  }),
 ],
};
