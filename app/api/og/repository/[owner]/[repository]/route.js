import { GetOGImage } from "lib/graphql";
import { NextResponse } from "next/server";
import { ImageResponse } from "next/server";

export const runtime = "edge";

const fontPoppinsBold = fetch(new URL("/public/fonts/bold.ttf", import.meta.url)).then((res) => res.arrayBuffer());
const fontPoppinsRegular = fetch(new URL("/public/fonts/regular.ttf", import.meta.url)).then((res) => res.arrayBuffer());

export async function GET(request, { params }) {
 const start = Date.now();
 let repo = params.repository;
 let owner = params.owner;

 if (!repo || !typeof repo === "string") {
  return new NextResponse(
   JSON.stringify({
    error: "Invalid repository name. Repository name must be a string",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }

 if (!owner || !typeof owner === "string") {
  return new NextResponse(
   JSON.stringify({
    error: "Invalid owner name. Owner name must be a string",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }

 const og = await GetOGImage(repo, owner);

 if (!og || og.private) {
  return new NextResponse(
   JSON.stringify({
    error: "Invalid repository or owner",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }

 if (og && og.og && og.domain === "repository-images.githubusercontent.com") {
  return NextResponse.redirect(og.og);
 }

 const fontBold = await fontPoppinsBold;
 const fontRegular = await fontPoppinsRegular;

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
     backgroundColor: "rgb(4, 13, 33)",
     fontSize: 64,
     fontWeight: 900,
     background: "linear-gradient(278.7deg, rgba(0, 0, 0, 0) 21.11%, rgba(0, 134, 245, 0.15) 137.25%), linear-gradient(98.7deg, rgba(4, 13, 33, 0.1) 60%, rgba(160, 68, 255, 0.1) 100%)",
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
