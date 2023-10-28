import { meta } from "config";
import { parseISO } from "/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { redirect } from "next/navigation";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = meta.title;

export const size = {
 width: 1200,
 height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }) {
 const { slug } = params;
 const post = allBlogs.find((post) => post.slug === slug);

 const fontBold = await fetch(new URL("/public/fonts/Geist-Black.otf", import.meta.url)).then((res) => res.arrayBuffer());
 const fontRegular = await fetch(new URL("/public/fonts/Geist-Regular.otf", import.meta.url)).then((res) => res.arrayBuffer());

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
     backgroundColor: "#101110",
     fontFamily: "Geist-Black",
     fontSize: 64,
     fontWeight: 900,
     boxShadow: "inset 0px 0px 277px 3px #101110",
     backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
    }}
   >
    <div style={{ color: "#fff", fontFamily: "Geist-Black" }}>{post.title ?? ""}</div>
    <div
     style={{
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "Geist-Regular",
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
     name: "Geist-Black",
     data: fontBold,
     style: "normal",
     weight: 900,
    },
    {
     name: "Geist-Regular",
     data: fontRegular,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}
