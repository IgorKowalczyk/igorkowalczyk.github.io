import { ImageResponse } from "@vercel/og";
import { parseISO } from "../../lib/utils";

const fontPoppinsMedium = fetch(new URL("../../public/fonts/medium.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const fontPoppinsBold = fetch(new URL("../../public/fonts/bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const fontPoppinsLight = fetch(new URL("../../public/fonts/light.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(req) {
 const { searchParams } = new URL(req.url.replaceAll("&amp%3B", "&"));
 const title = searchParams.get("title");
 const author = searchParams.get("author");
 const date = searchParams.get("date");
 const tag = searchParams.get("tag");
 const fontMedium = await fontPoppinsMedium;
 const fontBold = await fontPoppinsBold;
 const fontLight = await fontPoppinsLight;

 /* eslint-disable @next/next/no-img-element, jsx-a11y/alt-text */
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
     fontFamily: "Medium",
     backgroundColor: "#08152b",
    }}
   >
    <div
     style={{
      display: "flex",
      zIndex: "-2",
     }}
    ></div>
    <div
     style={{
      display: "flex",
      position: "absolute",
      fontSize: 50,
      fontStyle: "normal",
      flexDirection: "column",
      color: "white",
      lineHeight: 1.8,
      whiteSpace: "pre-wrap",
     }}
    >
     <div
      style={{
       backgroundColor: "rgba(255, 255, 255, 0.1)",
       borderRadius: "100px",
       padding: "5px 20px 0px 20px",
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       flexDirection: "row",
       height: "50px",
       marginBottom: "30px",
      }}
     >
      <p
       style={{
        fontWeight: 900,
        fontSize: 32,
        fontFamily: "Bold",
        lineHeight: 1,
        color: "white",
       }}
      >
       {tag || "Development"}:
      </p>
     </div>
     <h1
      style={{
       margin: 0,
       padding: 0,
       fontSize: 100,
       fontWeight: 900,
       fontFamily: "Bold",
       lineHeight: 1,
       letterSpacing: 0.2,
      }}
     >
      <span>{decodeURI(title) || "Title not found"}</span>
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
       alignItems: "center",
       paddingTop: 15,
       marginBottom: 15,
       fontSize: 40,
       fontWeight: 700,
      }}
     >
      <img
       src="https://igorkowalczyk.dev/assets/avatar.png"
       style={{
        width: "60px",
        heigth: "60px",
        borderRadius: 100,
       }}
      />
      <p
       style={{
        margin: "15px 0px 15px 20px",
        fontFamily: "Medium",
        padding: 0,
        lineHeight: 1,
       }}
      >
       By {author || "John Doe"}
      </p>
     </div>
     <span
      style={{
       fontSize: 30,
       fontFamily: "Light",
       color: "white",
       opacity: 0.5,
       fontWeight: 300,
      }}
     >
      {date ? parseISO(date) : "January 01, 1970"}
     </span>
    </div>
   </div>
  ),
  {
   width: 1600,
   height: 800,
   fonts: [
    {
     name: "Medium",
     data: fontMedium,
     style: "normal",
     weight: 700,
    },
    {
     name: "Bold",
     data: fontBold,
     style: "normal",
     weight: 900,
    },
    {
     name: "Light",
     data: fontLight,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}

export const config = {
 runtime: "edge",
};
