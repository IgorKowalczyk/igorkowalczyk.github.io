import { ImageResponse } from "@vercel/og";
import { parseISO } from "../../lib/utils";

const fontPoppinsBold = fetch(new URL("../../public/fonts/bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export default async function handler(req) {
 const { searchParams } = new URL(req.url.replaceAll("&amp%3B", "&"));
 const title = searchParams.get("title");
 const date = searchParams.get("date");
 const fontBold = await fontPoppinsBold;

 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     backgroundColor: "rgb(4, 13, 33)",
     fontFamily: "Poppins",
     fontSize: 64,
     fontWeight: 900,
     background: "linear-gradient(278.7deg, rgba(0, 0, 0, 0) 21.11%, rgba(0, 134, 245, 0.15) 137.25%), linear-gradient(98.7deg, rgba(4, 13, 33, 0.1) 60%, rgba(160, 68, 255, 0.1) 100%)",
    }}
   >
    <div style={{ color: "#fff", fontFamily: "Poppins" }}>{title ? title : ""}</div>
    <div style={{ color: "rgba(255, 255, 255, 0.5)", fontFamily: "Popins", fontSize: 48, marginTop: "15px" }}>{date ? parseISO(date) : ""}</div>
   </div>
  ),
  {
   width: 1200,
   height: 630,
   fonts: [
    {
     name: "Poppins",
     data: fontBold,
     style: "normal",
     weight: 900,
    },
   ],
  }
 );
}

export const config = {
 runtime: "edge",
};
