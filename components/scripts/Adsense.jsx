export function Adsense(props) {
 return <script async {...props} src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE}`} crossOrigin="anonymous"></script>;
}
