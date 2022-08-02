import { NextResponse } from "next/server";

export default async function handler() {
 return NextResponse.json([
  {
   name: "Bologna - Night walks",
   date: "05.06.2022 - 02.07.2022",
   description: "Pictures made during my night walks in Bologna",
   slug: "/photography/bologna",
   id: "bologna",
   count: 3,
   preview: {
    images: [
     {
      src: "/photography/bologna/1.jpg",
     },
     {
      src: "/photography/bologna/2.jpg",
     },
     {
      src: "/photography/bologna/3.jpg",
     },
    ],
   },
  },
 ]);
}

export const config = {
 runtime: "experimental-edge",
};
