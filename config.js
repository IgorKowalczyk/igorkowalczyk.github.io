import Link from "next/link";

export const config = {
 title: "Igor Kowalczyk",
 author: "Igor Kowalczyk",
 discord: "https://discord.gg/uxtSMtd2xZ",
 header: {
  title: "Igor Kowalczyk",
  subtitle: "Full-stack developer",
  description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems. ",
  code: {
   default: {
    user: "igorkowalczyk",
   },
   lines: [
    {
     command: "contact --discord",
     user: "igorkowalczyk",
     response: (
      <p>
       + <span className="font-semibold">User:</span>{" "}
       <Link href="https://discord.com/users/544164729354977282">
        <a target="_blank">Majonez.exe#2495</a>
       </Link>
       <br />+ <span className="font-semibold">Link:</span>{" "}
       <Link href="https://discord.gg/uxtSMtd2xZ">
        <a target="_blank">https://discord.gg/uxtSMtd2xZ</a>
       </Link>
      </p>
     ),
    },
   ],
  },
 },
 description: "My portfolio built on Next.js",
 url: "https://igorkowalczyk.vercel.app",
 theme_color: "#5686f5",
 type: "website",
 social: {
  image: "/favicons/android-chrome-384x384.png",
  github: {
   username: "igorkowalczyk",
  },
 },
 nav: {
  left: [
   {
    href: "/",
    title: "Home",
   },
   {
    href: "/github/",
    title: "Repositories",
   },
  ],
  right: [
   {
    href: "https://discord.gg/uxtSMtd2xZ",
    title: "Discord",
    target: "_blank",
   },
  ],
 },
};
