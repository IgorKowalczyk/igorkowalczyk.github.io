import { redirect } from "next/navigation";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { GetOGImage } from "@/lib/graphql";

export const runtime = "edge";

interface Params {
 repository: string;
 owner: string;
}

export async function GET(request: NextRequest, context: { params: Promise<Params> }) {
 const start = Date.now();
 const params = await context.params;

 if (!params) return redirect("/opengraph-image");

 const repo = params.repository;
 const { owner } = params;

 const { theme } = Object.fromEntries(new URL(request.url.replaceAll("&amp%3B", "&")).searchParams.entries()) || "dark";

 if (!repo || typeof repo !== "string" || !owner || typeof owner !== "string") {
  return redirect("/opengraph-image");
 }

 const og = await GetOGImage(repo, owner.toLowerCase());

 if (!og || og.private) {
  return redirect("/opengraph-image");
 }

 if (og && og.og && og.domain === "repository-images.githubusercontent.com") {
  const image = await fetch(og.og);
  const buffer = await image.arrayBuffer();
  const type = image.headers.get("Content-Type") || "image/png";

  return new Response(buffer, {
   headers: {
    "Content-Type": type,
    "Cache-Control": "public, max-age=31536000, immutable",
    "X-Response-Time": `${Date.now() - start}ms`,
   },
  });
 }

 const fontBold = fetch(new URL("public/fonts/geist-mono-900.otf", import.meta.url)).then((res) => res.arrayBuffer());
 const fontRegular = fetch(new URL("public/fonts/geist-mono-400.otf", import.meta.url)).then((res) => res.arrayBuffer());

 const mostUsedLanguage = og.languages && og.languages.length > 0 ? og.languages.reduce((a, b) => (a.size > b.size ? a : b)) : { node: { name: "Unknown", color: "#c1c1c1" }, size: 0 };

 /* eslint-disable next/no-img-element */
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
     backgroundColor: theme === "light" ? "#fff" : "#101110",
     fontSize: 64,
     fontWeight: 900,
    }}
   >
    <div
     style={{
      // prettier-ignore
      backgroundImage: "url(\"data:image/png;base64,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\")",
      opacity: 0.2,
      backgroundSize: "1203px 849px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "40%",
      display: "flex",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      filter: "hue-rotate(215deg) saturate(25)",
      position: "absolute",
      zIndex: 1,
     }}
    />
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
      <h1 style={{ color: theme === "light" ? "#000" : "#fff", fontFamily: "Geist-Black", fontSize: 32, margin: "0 0 15px 0" }}>
       {owner}
       <span style={{ color: "#c1c1c1", fontFamily: "Geist-Black" }}>/</span>
       {repo}
      </h1>
      <p style={{ color: "#c1c1c1", fontFamily: "Geist-Regular", fontSize: 24, maxWidth: "90%", margin: 0, padding: 0 }}>{og.description}</p>
     </div>
    </div>
    {og.languages && og.languages.length > 0 && (
     <div
      style={{
       display: "flex",
       flexDirection: "column",
       width: "100%",
       alignItems: "flex-start",
      }}
     >
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

      {mostUsedLanguage && (
       <p style={{ color: mostUsedLanguage.node.color || "#c1c1c1", fontFamily: "Geist-Black", fontSize: 16, maxWidth: "90%", margin: 0, padding: 0, paddingTop: "10px" }}>
        {mostUsedLanguage.node.name} {Math.floor((mostUsedLanguage.size / og.languages.reduce((a, b) => a + b.size, 0)) * 100) + "%"}
       </p>
      )}
     </div>
    )}
   </div>
  ),
  {
   width: 1200,
   height: 630,
   debug: false,
   headers: {
    ...(process.env.NODE_ENV !== "production" && {
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    }),
   },
   fonts: [
    {
     name: "Geist-Black",
     data: await fontBold,
     style: "normal",
     weight: 900,
    },
    {
     name: "Geist-Regular",
     data: await fontRegular,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}
