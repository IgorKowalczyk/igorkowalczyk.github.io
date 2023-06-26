const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { spacing } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
 darkMode: "class",
 content: [
  // Prettier
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./config.js",
  "./data/blog/*.mdx",
 ],
 theme: {
  extend: {
   fontWeight: {
    semibold: 700,
   },
   typography: {
    DEFAULT: {
     css: {
      "h1,h2,h3,h4,h5": {
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.gray[500],
       "text-decoration-color": colors.gray[600],
       transition: "0.2s",
       "text-decoration-thickness": "1.5px",
       "text-underline-offset": "2px",
       "&:hover": {
        color: colors.black,
        "text-decoration-color": colors.black,
       },
      },
     },
    },
    dark: {
     css: {
      color: colors.slate[300],
      "h1,h2,h3,h4,h5": {
       color: colors.gray[100],
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.slate[100],
       "text-decoration-color": colors.gray[500],
       "&:hover": {
        color: colors.slate[100],
        "text-decoration-color": colors.slate[100],
       },
      },
      blockquote: {
       borderLeftColor: colors.gray[700],
       color: colors.slate[300],
      },
     },
    },
   },
   backgroundImage: {
    "main-gradient": "radial-gradient(25% 90% at 50% 100%, #16161700 0%, transparent 100%),radial-gradient(25% 25% at 20% 70%, #1616175e 0%, transparent 97%)",
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
    shimmer: {
     "100%": {
      transform: "translateX(100%)",
     },
    },
   },
  },
 },
 variants: {
  typography: ["dark"],
 },
 plugins: [
  /* eslint-disable */
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
  require("@tailwindcss/typography"),
  require("@tailwindcss/aspect-ratio"),
  /* eslint-enable */
 ],
};
