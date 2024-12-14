import type { Config } from "tailwindcss";
import tailwindHeadlessui from "@headlessui/tailwindcss";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";
import tailwindTypography from "@tailwindcss/typography";
import tailwindGradientMaskImage from "tailwind-gradient-mask-image";
import colors from "tailwindcss/colors";
import { spacing, fontFamily } from "tailwindcss/defaultTheme";
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
    "2xl": "1440px",
   },
  },
  extend: {
   fontFamily: {
    mono: ["var(--font-geist-mono)", ...fontFamily.mono],
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
   animation: {
    rays: "rotate-hue 20s ease-out infinite",
   },
   keyframes: {
    "rotate-hue": {
     "0%": {
      filter: "hue-rotate(540deg) saturate(7.3)",
     },
     to: {
      filter: "hue-rotate(180deg) saturate(7.3)",
     },
    },
   },
  },
 },
 variants: {
  typography: ["dark"],
 },
 plugins: [tailwindTextFill, tailwindGradientMaskImage, tailwindHeadlessui, tailwindTypography, tailwindAspectRatio],
} satisfies Config;
