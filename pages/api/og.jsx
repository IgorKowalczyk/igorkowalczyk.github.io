import { ImageResponse } from "@vercel/og";

export default function () {
 return new ImageResponse(
  (
   <div
    style={{
     height: "100%",
     width: "100%",
     display: "flex",
     textAlign: "center",
     alignItems: "center",
     justifyContent: "center",
     flexDirection: "column",
     flexWrap: "nowrap",
     fontFamily: "Poppins",
     fontWeight: "bold",
     backgroundColor: "#08152b",
     backgroundSize: "1600px 803px",
     backgroundRepeat: "no-repeat",
    }}
   >
    <div
     style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
     }}
    ></div>
    <div
     style={{
      display: "flex",
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
      }}
     >
      How I bult my website
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
      {" "}
      August 12, 2022
     </span>
    </div>
   </div>
  ),
  {
   width: 1600,
   height: 800,
  }
 );
}

export const config = {
 runtime: "experimental-edge",
};
