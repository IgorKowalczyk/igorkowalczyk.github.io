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
      backgroundImage: "url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVXSURBVHgB7ZbJbxxVEMar3tLbbPaMh2CskLCTsCvibg6cQOKU/8f/A2fgzoULd3zghoRAQogQxw6Jg9fxeOzp9b16Rc0kQYoIiQ03REnd09M90/r6q199rxGk+MKFVpPnl4JS7ymlXucudPl9faquR2V413YognSPhqOvxh/ufr77SbJTPvOcOnZpdrPIWz8dgzlxLQRVAodNVvi9yfONH3748QRgLcAZS833e3t1RDRBxANmPoEyBNwOsd8gDdNQKwbuqWl2Jd5Mnje7lVaUU2zALVhLi3EAox0CJcC4wAEHIY7b1659rOEcpR58EiTJlABGDDDmBms5MmoLNOyzV8QuAZc8H91rvdne4Jauco5VQx1r/YLBEKFjwJneLiIPMahe2dmM4Rw1F4LSHRgMKlVVY0YcKeZpyOXaFsVwOzDV0Bj0ONDj1tvpjejZaL/SBkrfVsotxYY6hkQyIUIGFAbB4iCePJvC9S/P7Ir682hjwyVRdAJEB+LKRNXspFER/ErajLkW20mcSF/N7iavtG43ia1yjDW5XiSuRECRcvJEBhX0kHjo0mn38ne5PbcQcSVAlpWaeYRaj6TXJUzYiCs23KMQamq0CmZoDtrvZb/oPkxKgbhyHaXrvtUh1p4VCKumJbsBQ9RfuHw5EWDVuYTM68qV2ocwUSEc4BxaJtzlGG7Kracg0AZYNHl6NdmKL6W7lUVXQGrAD6Q9PYFWaWElxMC8qAIt+XzSuXZt+UzteVTI+jplcZyzc4fSniNsuIIjsHDLC7SBlOcmglqg3W29md64D61WjZtB278PrcwrSnu6rHhJ2VSgffVM0D4iZA7teFxaa49DCCM5NZXxRbgrrtymIKSIK6yG9jh7I/01Wo5HhY5CGTKj6gfQCuzErFMZoQEzDkzTZNfPAO3j+udPQzgVUQc0a49AywciRKCFI3YSWj5WZfZysp1dybZ8ZJopx0w0g7YfAYgrgMEI3L3ZKBvm7ncHw6dC+xchM2g77XYh0B7J10OBtlCToGfQwm9E4LjR4M1Kcpi9k/2s+3pSslWl7xiBVsYoU3NohaqMGfoNqYWB6cRPg/bxF197rfFJ8jBpTyVpBVpMwi2aQ2vmSZunryebyQvxvToxVEjAgV+U9iykAbSuxQ1BhaOAlIS6EKuu4vmFzKAlyrWEm5FNklagDZK0YvmO98Gxm0F7UaB9K/4FWrrI2ULjetpWQ4OuZ04p0oce8VD+X9S+oNXVn88v5CG0BfNxIDqEObSyvyMB95s86gxaDDi0J9nVzk27bPdLbbGYQdusZKq6mOb1M/EWdONbYs5uD07K1VV44gL4tzSviRhJWolLyETtokjrokar+lzxi5awAxEgRxxMfduvlFv1inYqyjhSinvRpF5I79YdfWclhcNvv/6oXl//gOG8jjxwJUC7XYrSoyAWCysTnlJJ21zjOOTsQVZhr2XdEWhv4ECdFqxCFVpWN0s2cZdknlaHHr5Y9XK3J4qYlXni1Z2d2rVaY1G7rRB1qCCFAgssg5IGGbl91DYNvhTfoQvx/sku9VsVEWujG5kzqEip9U83Zq57+DdCxBXibve0rKq7jjmPank0Q0Rp1BEvGTRWSajqIR6NLthRkaB3TtuUfThBq/d1U1QQT870cmSe+oudnSpdXj6EqppIeDMsSWZe1B0XY0VMO4C+bqVwnEWND1zucZPqYJxwnh0tgJpOd14mOEM9VciMFRYxsLY22xg+k3ZvX/QVypubszY0tX+jd1BWmwmURUeriDApKr+3+Xs9XVuls/Dxj0sSE/kbkPSeb7L8MMpJFJ2zTEX4v/5L9QfS1g3b/Z4cQgAAAABJRU5ErkJggg==\")",
      opacity: 0.2,
      backgroundSize: "1203px 849px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "45%",
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
