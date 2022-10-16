import { ImageResponse } from "@vercel/og";

const font = fetch(new URL("../../fonts/Poppins-Medium.tff", import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler() {
 const fontData = await font;
 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     textAlign: "center",
     position: "relative",
     alignItems: "center",
     justifyContent: "center",
     flexDirection: "column",
     flexWrap: "nowrap",
     fontFamily: "Poppins",
     backgroundColor: "#08152b",
    }}
   >
    <div
     style={{
      display: "flex",
      zIndex: "-2",
     }}
    >
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

    <div
     style={{
      display: "flex",
      position: "absolute",
      fontSize: 50,
      fontStyle: "normal",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
      lineHeight: 1.8,
      whiteSpace: "pre-wrap",
     }}
    >
     <h1
      style={{
       margin: 0,
       padding: 0,
       fontSize: 100,
       fontWeight: 700,
      }}
     >
      <span>How I bult my website</span>
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
     <div
      style={{
       display: "flex",
      }}
     >
      <img
       src="https://igorkowalczyk.dev/assets/avatar.png"
       style={{
        width: "80px",
        heigth: "80px",
        borderRadius: 100,
       }}
      />
      <b
       style={{
        marginLeft: "20px",
       }}
      >
       By Igor Kowalczyk
      </b>
     </div>
     <span
      style={{
       fontSize: 30,
       color: "white",
       fontStyle: "italic",
       opacity: 0.5,
      }}
     >
      August 12, 2022
     </span>
    </div>
   </div>
  ),
  {
   width: 1600,
   height: 800,
   fonts: [
    {
     file: fontData,
     family: "Poppins",
     weight: 700,
    },
   ],
  }
 );
}

export const config = {
 runtime: "experimental-edge",
};
