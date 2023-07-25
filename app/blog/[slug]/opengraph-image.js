import { meta } from "config";
import { parseISO } from "/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { redirect } from "next/navigation";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = meta.title;

export const size = {
 width: 1200,
 height: 630,
};

export const contentType = "image/png";

const fontPoppinsBold = fetch(new URL("/public/fonts/bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const fontPoppinsRegular = fetch(new URL("/public/fonts/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export default async function Image({ params }) {
 const { slug } = params;
 const post = allBlogs.find((post) => post.slug === slug);

 const fontBold = await fontPoppinsBold;
 const fontRegular = await fontPoppinsRegular;

 if (!post) {
  return redirect("/opengraph-image");
 }

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
     fontFamily: "PoppinsBold",
     fontSize: 64,
     fontWeight: 900,
     background: "linear-gradient(278.7deg, rgba(0, 0, 0, 0) 21.11%, rgba(0, 134, 245, 0.15) 137.25%), linear-gradient(98.7deg, rgba(4, 13, 33, 0.1) 60%, rgba(160, 68, 255, 0.1) 100%)",
    }}
   >
    <div style={{ color: "#fff", fontFamily: "PoppinsBold" }}>{post.title ?? ""}</div>
    <div
     style={{
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "PoppinsRegular",
      fontSize: 48,
      marginTop: "15px",
     }}
    >
     {post.publishedAt ? parseISO(post.publishedAt) : ""}
    </div>
   </div>
  ),
  {
   ...size,
   fonts: [
    {
     name: "PoppinsBold",
     data: fontBold,
     style: "normal",
     weight: 900,
    },
    {
     name: "PoppinsRegular",
     data: fontRegular,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}
