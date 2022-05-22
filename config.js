import Link from "next/link";

export const config = {
 title: "Igor Kowalczyk",
 author: "Igor Kowalczyk",
 description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems",
 header: {
  title: "Igor Kowalczyk",
  subtitle: "Full-stack developer",
  description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems.",
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
 url: "https://igorkowalczyk.vercel.app",
 theme_color: "#5485f2",
 type: "website",
 social: {
  image: "/banner.png",
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
   {
    href: "/blog/",
    title: "Blog",
    target: "_blank",
   },
  ],
  right: [
   {
    href: "/discord/",
    title: "Discord",
    target: "_blank",
   },
  ],
 },
};
