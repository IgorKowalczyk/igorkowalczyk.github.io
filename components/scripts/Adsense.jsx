export function Adsense(props) {
 process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GOOGLE_ASENSE ? <script async {...props} src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ARC_TOKEN}`} crossOrigin="anonymous"></script> : "";
}
