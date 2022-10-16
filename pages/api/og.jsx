import { ImageResponse } from "@vercel/og";
import { parseISO, format } from "date-fns";

export default async function handler(req) {
 const { searchParams } = req.nextUrl;
 const title = searchParams.get("title");
 const author = searchParams.get("author");
 const date = searchParams.get("date");


 return new ImageResponse(
  (
   <div tw="h-full w-full flex text-center relative items-center justify-center flex-col bg-[#08152b]">
    <div tw="flex">
     <svg width="1600" height="934" viewBox="0 0 1600 934">
      <g opacity="0.19" filter="url(#a)">
       <path d="M978 405C978 503.307 898.307 583 800 583C701.693 583 622 503.307 622 405C622 306.693 701.693 227 800 227C898.307 227 978 306.693 978 405Z" fill="#0086F5" fill-opacity="0.18" />
      </g>
      <g opacity="0.2" filter="url(#b)">
       <ellipse cx="1198.5" cy="608.5" rx="165.5" ry="83.5" fill="#0086F5" fill-opacity="0.3" />
      </g>
      <g opacity="0.36" filter="url(#c)">
       <rect x="345" y="563" width="195" height="92" fill="#0086F5" fill-opacity="0.25" />
      </g>
      <defs>
       <filter id="a" x="395" y="0" width="810" height="810" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="113.5" result="eff1" />
       </filter>
       <filter id="b" x="806" y="298" width="785" height="621" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="113.5" result="eff1" />
       </filter>
       <filter id="c" x="66" y="284" width="753" height="650" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="139.5" result="eff1" />
       </filter>
      </defs>
     </svg>
    </div>

    <div tw="flex absolute flex-col items-center justify-center font-bold text-4xl text-white leading-[1.8]">
     <h1 tw="m-0 p-0 text-8xl font-semibold mb-9">
      <span>{ title || "Title not found" }</span>
      <span
       style={{
        backgroundImage: "linear-gradient(to right, #a2facf, #64acff)",
        backgroundClip: "text",
        "-webkit-background-clip": "text",
        color: "transparent",
       }}
      >
       .
      </span>
     </h1>
     <div tw="flex items-center">
      <img src="https://igorkowalczyk.dev/assets/avatar.png" tw="h-[80px] w-[80px] rounded-full" />
      <span tw="ml-5 text-5xl font-medium">By { author  || "John Doe"}</span>
     </div>
     <span tw="text-white italic opacity-50 text-3xl font-normal mt-2">{ format(parseISO(date), "MMMM dd, yyyy") || "January 01, 1970"}</span>
    </div>
   </div>
  ),
  {
   width: 1600,
   height: 800,
  }
 );
}

export const config = {
 runtime: "experimental-edge",
};
