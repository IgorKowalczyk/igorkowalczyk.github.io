import { GetOGImage } from "lib/graphql";
import { redirect } from "next/navigation";
import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET(request, { params }) {
 const start = Date.now();

 if (!params) return redirect("/opengraph-image");

 const repo = params.repository;
 const owner = params.owner;

 if (!repo || !typeof repo === "string" || !owner || !typeof owner === "string") {
  console.log(repo, owner);
  return redirect("/opengraph-image");
 }

 const og = await GetOGImage(repo, owner.toLowerCase());

 if (!og || og.private) {
  return redirect("/opengraph-image");
 }

 if (og && og.og && og.domain === "repository-images.githubusercontent.com") {
  const image = await fetch(og.og);
  const buffer = await image.arrayBuffer();
  const type = image.headers.get("Content-Type");

  return new Response(buffer, {
   headers: {
    "Content-Type": type,
    "Cache-Control": "public, max-age=31536000, immutable",
    "X-Response-Time": `${Date.now() - start}ms`,
   },
  });
 }

 const fontBold = await fetch(new URL("/public/fonts/bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
 const fontRegular = await fetch(new URL("/public/fonts/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());

 /* eslint-disable @next/next/no-img-element */
 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     flexDirection: "column",
     padding: "0 10%",
     justifyContent: "center",
     backgroundColor: "#101110",
     fontSize: 64,
     fontWeight: 900,
     boxShadow: "inset 0px 0px 277px 3px #101110",
     backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255,255,255,0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
    }}
   >
    <div
     style={{
      display: "flex",
      alignItems: "center",
      gap: "20px",
     }}
    >
     <img
      src={og.owner.avatar}
      height="128px"
      width="128px"
      style={{
       width: "128px",
       height: "128px",
       display: "flex",
       borderRadius: "15%",
      }}
      alt="Avatar"
     />

     <div
      style={{
       display: "flex",
       flexDirection: "column",
       justifyContent: "center",
      }}
     >
      <h1 style={{ color: "#fff", fontFamily: "PoppinsBold", fontSize: 32, margin: "0 0 15px 0" }}>
       {owner}
       <span style={{ color: "#c1c1c1", fontFamily: "PoppinsRegular" }}>/</span>
       {repo}
      </h1>
      <p style={{ color: "#c1c1c1", fontFamily: "PoppinsRegular", fontSize: 24, maxWidth: "90%", margin: 0, padding: 0 }}>{og.description}</p>
     </div>
    </div>
    {og.languages && og.languages.length > 0 && (
     <div
      style={{
       display: "flex",
       width: "100%",
       alignItems: "center",
       borderRadius: "10px",
       paddingTop: "20px",
      }}
     >
      {og.languages.map((lang, i) => (
       <div
        key={lang.node.name}
        style={{
         display: "flex",
         alignItems: "center",
         width: (lang.size / og.languages.reduce((a, b) => a + b.size, 0)) * 100 + "%",
         height: "10px",
         backgroundColor: lang.node.color,
         borderRadius: og.languages.length === 1 ? "10px" : i === 0 ? "10px 0 0 10px" : i === og.languages.length - 1 ? "0 10px 10px 0" : 0,
        }}
       />
      ))}
     </div>
    )}
   </div>
  ),
  {
   width: 1200,
   height: 630,
   debug: false,
   headers: {
    "Server-Timing": `response;dur=${Date.now() - start}ms`,
   },
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
