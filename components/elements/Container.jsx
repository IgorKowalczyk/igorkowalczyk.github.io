import { useRouter } from "next/router";
import { meta as headMeta, social } from "/config";
import { Nav } from "components/elements/Nav";
import { Footer } from "components/elements/Footer";
import { changeDecorations } from "/lib/utils";
import { useEffect } from "react";
import Head from "next/head";

export function Container(props) {
 useEffect(() => {
  changeDecorations(localStorage.getItem("decorations"));
  window.addEventListener("decorations", () => {
   changeDecorations(localStorage.getItem("decorations"));
  });
 }, []);

 const { children, ...customMeta } = props;
 const router = useRouter();
 const meta = {
  ...headMeta,
  ...customMeta,
 };

 const readingTime = meta.readingTime > 1 ? (meta.readingTime = `${Math.round(meta.readingTime)} minutes`) : (meta.readingTime = `${Math.round(meta.readingTime)} minute`);
 return (
  <>
   <Head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta name="author" content={meta.author} />
    <meta property="og:url" content={meta.url + router.asPath} />
    <meta property="og:type" content={meta.type || "website"} />
    <meta property="og:locale" content={meta.locale} />
    <meta property="og:site_name" content={meta.siteName} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:image" content={meta.image || social.image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="twitter:url" content={meta.url + router.asPath} />
    <meta property="twitter:title" content={meta.title} />
    <meta property="twitter:description" content={meta.description} />
    <meta property="twitter:image" content={meta.image || social.image} />
    <meta property="twitter:site" content={social.twitter} />
    <meta property="twitter:creator" content={social.twitter} />
    <meta property="twitter:card" content="summary_large_image" />
    {meta.date && <meta property="article:published_time" content={meta.date} />}
    {meta.readingTime && <meta property="twitter:label1" value="Est. reading time" />}
    {meta.readingTime && <meta property="twitter:data1" value={readingTime} />}
    <meta name="copyright" content={`Copyright ${meta.author} ${new Date().getFullYear()}`}></meta>
    <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
    <link rel="canonical" href={meta.url + router.asPath} />
    <meta name="theme-color" content={meta.themeColor} />
    <meta name="msapplication-TileColor" content={meta.themeColor} />
    <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />

    {process.env.HOTJAR_ID && (
     <script
      dangerouslySetInnerHTML={{
       __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
      }}
     />
    )}
   </Head>
   <Nav />
   <div className="mt-24 flex min-h-screen flex-col antialiased">{children}</div>
   <Footer />
  </>
 );
}
