import { useRouter } from "next/router";
import { config } from "@/config";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import Nav from "@components/Nav";
import Arc from "@components/Arc";
import Footer from "components/Footer";
import Twemoji from "react-twemoji";

export default function Container(props) {
 const { children, ...customMeta } = props;
 const shouldReduceMotion = useReducedMotion()
 const router = useRouter();
 const meta = {
  ...config,
  ...customMeta,
 };

 const variants = {
  animate: {
   y: 0,
   scale: 1,
   opacity: 1,
  },
  exit: {
   y: 15,
   opacity: 0,
   transition: {
    duration: 0.3,
   },
  },
  transition: {
   duration: 0.3,
  }
 }

 return (
  <>
   <Head>
    <title>{meta.title}</title>
    <meta name="robots" content="follow, index" />
    <meta content={meta.description} name="description" />
    <meta property="og:url" content={`${meta.url + router.asPath}`} />
    <link rel="canonical" href={`${meta.url}${router.asPath}`} />
    <meta property="og:type" content={meta.type} />
    <meta property="og:site_name" content={meta.author} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:image" content={meta.social.image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image" content={meta.social.image} />
    <meta name="copyright" content={`Copyright${config.author} ${new Date().getFullYear()}`}></meta>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
    <meta name="theme-color" content={meta.theme_color} />
    <meta name="msapplication-TileColor" content={meta.theme_color} />
    {meta.twitter && <meta property="article:published_time" content={meta.twitter} />}
    {meta.date && <meta property="article:published_time" content={meta.date} />}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <Arc />
   </Head>
   <Nav />
   <main id="skip" className="mt-24 flex flex-col justify-center  px-8">
    <Twemoji options={{ className: "twemoji" }}>
     <motion.div initial="initial" animate="enter" exit="exit" variants={{ variants: shouldReduceMotion ? 0 : variants }}>{children}</motion.div>
    </Twemoji>
   </main>
   <Footer />
  </>
 );
}
