import Link from "next/link";

export const meta = {
 title: "Igor Kowalczyk",
 author: "Igor Kowalczyk",
 description: "I'm a full-stack developer based in Poland. I have a passion for building web applications and solving problems",
 url: "https://igorkowalczyk.dev",
 theme_color: "#5485f2",
 type: "website",
};

// Work In Progress
export const feautures = {
 smoothTransition: true, // Smooth transition between pages
};

export const header = {
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
     <>
      + <span className="font-semibold">User:</span>{" "}
      <Link href="https://discord.com/users/544164729354977282" target="_blank">
       Majonez.exe#2495
      </Link>
      <br />+ <span className="font-semibold">Link:</span>{" "}
      <Link href="https://discord.gg/uxtSMtd2xZ" target="_blank">
       https://discord.gg/uxtSMtd2xZ
      </Link>
     </>
    ),
   },
  ],
 },
};

export const nav = {
 left: [
  {
   href: "/",
   title: "Home",
  },
  {
   href: "/repositories/",
   title: "My work",
  },
  {
   href: "/blog/",
   title: "Blog",
  },
 ],
 right: [
  {
   href: "/photography/",
   title: "Photography",
  },
  {
   href: "/discord/",
   title: "Discord",
   target: "_blank",
  },
 ],
};

// Work in progress
export const contact = {
 links: [
  {
   href: "mailto:majonezexe@protonmail.com",
   title: "Email",
   icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="mt-[2px] mr-2 h-4 w-4 duration-200 motion-reduce:transition-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
    </svg>
   ),
  },
  {
   href: "/discord",
   title: "Discord",
   icon: (
    <svg className="mt-[2px] mr-2 h-4 w-4 fill-blue-900 duration-200 motion-reduce:transition-none dark:fill-white" width="71" height="55" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
    </svg>
   ),
  },
  {
   href: "/twitter",
   title: "Twitter",
   icon: (
    <svg className="mt-[2px] mr-2 h-4 w-4 fill-blue-900 duration-200 motion-reduce:transition-none dark:fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 248 204">
     <path
      d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
     />
    </svg>
   ),
  },
  {
   href: "/instagram",
   title: "Instagram",
   icon: (
    <svg className="mt-[2px] mr-2 h-4 w-4 fill-blue-900 duration-200 motion-reduce:transition-none dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
     <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)" />
    </svg>
   ),
  },
 ],
};

export const social = {
 image: "/assets/banner.png",
 github: {
  username: "igorkowalczyk",
  repo: "igorkowalczyk.github.io",
 },
};

/*export const ads = {
 ca_pub: process.env.NEXT_PUBLIC_CA_PUB,
};*/

export const footer = {
 categories: [
  {
   title: "Important Links",
   links: [
    {
     title: "Home",
     href: "/",
    },
    {
     title: "Projects",
     href: "/repositories",
    },
    {
     title: "Blog",
     href: "/blog",
    },
    {
     title: "Photography",
     href: "/photography",
    },
   ],
  },
  {
   title: "Social",
   links: [
    {
     title: "Github",
     href: "/github",
    },
    {
     title: "Instagram",
     href: "/instagram",
    },

    {
     title: "Discord",
     href: "/discord",
    },
   ],
  },
  {
   title: "Other",
   links: [
    {
     title: "What i use",
     href: "/uses",
    },
    {
     title: "Contact",
     href: "/#contact",
    },
   ],
  },
 ],
};
