import tailwindHeadlessui from "@headlessui/tailwindcss";
import tailwindIsBrowser from "@igorkowalczyk/is-browser";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import svgToDataUri from "mini-svg-data-uri";
import tailwindGradientMaskImage from "tailwind-gradient-mask-image";
import colors from "tailwindcss/colors";
import { spacing } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";
import tailwindTextFill from "tailwindcss-text-fill";

export default {
 darkMode: "class",
 content: [
  // Prettier
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./config.js",
  "./content/blog/*.mdx",
 ],
 theme: {
  extend: {
   fontWeight: {
    semibold: 700,
   },
   fontFamily: {
    sans: ["var(--font-geist-sans)"],
    mono: ["var(--font-geist-mono)"],
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
      color: colors.gray[300],
      "h1,h2,h3,h4,h5": {
       color: colors.gray[100],
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.gray[100],
       "text-decoration-color": colors.gray[500],
       "&:hover": {
        color: colors.gray[100],
        "text-decoration-color": colors.gray[100],
       },
      },
      blockquote: {
       borderLeftColor: colors.gray[700],
       color: colors.gray[300],
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
  /* eslint-disable-next-line */
  plugin(function ({ matchUtilities }) {
   matchUtilities({
    "bg-grid": (value) => ({
     backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
    }),
   });
  }),
  tailwindTextFill,
  tailwindGradientMaskImage,
  tailwindHeadlessui,
  tailwindIsBrowser,
  tailwindTypography,
  tailwindAspectRatio,
 ],
};
