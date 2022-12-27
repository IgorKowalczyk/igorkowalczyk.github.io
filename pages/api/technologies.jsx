import { NextResponse } from "next/server";

export default async function handler() {
 return NextResponse.json([
  {
   name: "React",
   icon: "/assets/tech/react.svg",
  },
  {
   name: "Next.js",
   icon: "/assets/tech/next.svg",
   class: "invert-0 dark:invert",
  },
  {
   name: "TailwindCSS",
   icon: "/assets/tech/tailwindcss.svg",
  },
  {
   name: "Javascript",
   icon: "/assets/tech/javascript.svg",
  },
  {
   name: "Node.js",
   icon: "/assets/tech/nodejs.svg",
  },
  {
   name: "Express.js",
   icon: "/assets/tech/express.svg",
   class: "invert-0 dark:invert",
  },
  {
   name: "NPM",
   icon: "/assets/tech/npm.svg",
  },
  {
   name: "PNPM",
   icon: "/assets/tech/pnpm.svg",
  },
  {
   name: "Git",
   icon: "/assets/tech/git.svg",
  },
  {
   name: "Github",
   icon: "/assets/tech/github.svg",
   class: "dark:invert-0 invert",
  },
  {
   name: "GraphQL",
   icon: "/assets/tech/graphql.svg",
  },
  {
   name: "Figma",
   icon: "/assets/tech/figma.svg",
  },
  {
   name: "Webpack",
   icon: "/assets/tech/webpack.svg",
  },
  {
   name: "Turborepo",
   icon: "/assets/tech/turborepo.svg",
  },
  {
   name: "Framer Motion",
   icon: "/assets/tech/framer.svg",
  },
  {
   name: "C++",
   icon: "/assets/tech/cpp.svg",
  },
  {
   name: "MySQL",
   icon: "/assets/tech/mysql.svg",
  },
  {
   name: "MongoDB",
   icon: "/assets/tech/mongodb.svg",
  },
  {
   name: "Discord.js",
   icon: "/assets/tech/discordjs.svg",
  },
  {
   name: "Heroicons",
   icon: "/assets/tech/heroicons.svg",
  },
  {
   name: "Headless UI",
   icon: "/assets/tech/headlessui.svg",
  },
  {
   name: "Docker",
   icon: "/assets/tech/docker.svg",
  },
  {
   name: "Vercel",
   icon: "/assets/tech/vercel.svg",
   class: "invert-0 dark:invert",
  },
  {
   name: "CSS",
   icon: "/assets/tech/css.svg",
  },
  {
   name: "Eslint",
   icon: "/assets/tech/eslint.svg",
  },
 ]);
}

export const config = {
 runtime: "edge",
};
