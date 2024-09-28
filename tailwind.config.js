import tailwindHeadlessui from "@headlessui/tailwindcss";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import tailwindGradientMaskImage from "tailwind-gradient-mask-image";
import colors from "tailwindcss/colors";
import { spacing } from "tailwindcss/defaultTheme";
import tailwindTextFill from "tailwindcss-text-fill";

/** @type {import('tailwindcss').Config} */
export default {
 darkMode: "class",
 content: [
  // Prettier
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./config.{js,ts,jsx,tsx}",
  "./content/**/*.mdx",
 ],
 theme: {
  container: {
   center: true,
   padding: "2rem",
   screens: {
    "2xl": "1400px",
   },
  },
  extend: {
   fontWeight: {
    semibold: 700,
   },
   fontFamily: {
    mono: ["var(--font-geist-mono)"],
   },
   typography: {
    DEFAULT: {
     css: {
      "h1,h2,h3,h4,h5": {
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.neutral[500],
       "text-decoration-color": colors.neutral[600],
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
      color: colors.neutral[300],
      "h1,h2,h3,h4,h5": {
       color: colors.neutral[100],
       "scroll-margin-top": spacing[28],
      },
      a: {
       color: colors.neutral[100],
       "text-decoration-color": colors.neutral[500],
       "&:hover": {
        color: colors.neutral[100],
        "text-decoration-color": colors.neutral[100],
       },
      },
      blockquote: {
       borderLeftColor: colors.neutral[700],
       color: colors.neutral[300],
      },
     },
    },
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
 plugins: [tailwindTextFill, tailwindGradientMaskImage, tailwindHeadlessui, tailwindTypography, tailwindAspectRatio],
};
