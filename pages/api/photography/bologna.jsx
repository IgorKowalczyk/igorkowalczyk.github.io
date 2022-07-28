import { NextResponse } from "next/server";

export default async function handler() {
 return NextResponse.json({
  name: "Bologna - Night walks",
  date: "05.06.2022 - 02.07.2022",
  description: "Photos taken during my long night walks in Bologna",
  id: "italy",
  images: [
   {
    name: "Sidewalk at night",
    url: "/photography/bologna/1.jpg",
   },
   {
    name: "Stop sign",
    url: "/photography/bologna/2.jpg",
   },
   {
    name: "Train station during night",
    url: "/photography/bologna/3.jpg",
   },
  ],
 });
}

export const config = {
 runtime: "experimental-edge",
};
