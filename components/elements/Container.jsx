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
    <meta content={meta.description} name="description" />
    <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
    <meta content={meta.author} name="author" />
    <meta content={meta.url + router.asPath} property="og:url" />
    <meta content={meta.type || "website"} property="og:type" />
    <meta content={meta.locale} property="og:locale" />
    <meta content={meta.siteName} property="og:site_name" />
    <meta content={meta.description} property="og:description" />
    <meta content={meta.title} property="og:title" />
    <meta content={meta.image || social.image} property="og:image" />
    <meta content={social.twitter} property="twitter:site" />
    <meta content={social.twitter} property="twitter:creator" />
    <meta content="summary_large_image" property="twitter:card" />
    {meta.date && <meta content={meta.date} property="article:published_time" />}
    {meta.readingTime > 0 && (
     <>
      <meta value="Est. reading time" property="twitter:label1" />
      <meta value={readingTime} property="twitter:data1" />
     </>
    )}
    <meta content={`Copyright ${meta.author} ${new Date().getFullYear()}`} name="copyright" />
    <meta content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" name="robots" />
    <meta content={meta.themeColor} name="theme-color" />
    <meta content={meta.themeColor} name="msapplication-TileColor" />
    <link rel="canonical" href={meta.url + router.asPath} />

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
