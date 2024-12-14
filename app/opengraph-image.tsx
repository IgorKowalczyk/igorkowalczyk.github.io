import { ImageResponse } from "next/og";
import { meta } from "@/config";

export const runtime = "edge";
export const contentType = "image/png";
export const alt = `${meta.title} - ${meta.shortDescription}`;
export const size = {
 width: 1200,
 height: 630,
};

export default async function Image() {
 const fontBold = fetch(new URL("public/fonts/geist-mono-900.otf", import.meta.url)).then((res) => res.arrayBuffer());
 const fontRegular = fetch(new URL("public/fonts/geist-mono-400.otf", import.meta.url)).then((res) => res.arrayBuffer());

 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     padding: "50px",
     flexDirection: "column",
     justifyContent: "flex-end",
     backgroundColor: "#101110",
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
      color: "#fff",
      fontFamily: "GeistMono-Black",
      fontSize: 64,
     }}
    >
     {meta.title}
    </div>
    <div
     style={{
      color: "rgba(255, 255, 255, 0.5)",
      fontFamily: "GeistMono-Regular",
      fontSize: 32,
      fontWeight: 400,
      marginTop: "15px",
     }}
    >
     {meta.shortDescription}
    </div>
   </div>
  ),
  {
   ...size,
   fonts: [
    {
     name: "GeistMono-Black",
     data: await fontBold,
     style: "normal",
    },
    {
     name: "GeistMono-Regular",
     data: await fontRegular,
     style: "normal",
     weight: 400,
    },
   ],
  }
 );
}
