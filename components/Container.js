import { useRouter } from "next/router";
import { config } from "@/config";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import Twemoji from "react-twemoji";
//import dynamic from "next/dynamic";
//const Nav = dynamic(() => import('@components/Nav'))
//const Arc = dynamic(() => import('@components/Arc'))
//const Footer = dynamic(() => import('@components/Footer'))
import Nav from "@components/Nav";
import Arc from "@components/Arc";
import Footer from "@components/Footer";

export default function Container(props) {
 const { children, ...customMeta } = props;
 const reduceMotion = useReducedMotion();
 const router = useRouter();
 const meta = {
  ...config,
  ...customMeta,
 };

 const variants = {
  initial: {
   scale: reduceMotion ? 1 : 0.96,
   y: reduceMotion ? 0 : 15,
   opacity: 0,
  },
  animate: {
   y: 0,
   scale: 1,
   opacity: 1,
  },
  exit: {
   y: reduceMotion ? 0 : 15,
   opacity: 0,
   transition: {
    duration: reduceMotion ? 0 : 0.3,
   },
  },
  transition: {
   duration: reduceMotion ? 0 : 0.3,
  },
 };

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
    <link rel="preconnect" href="https://twemoji.maxcdn.com" />
    <Arc />
   </Head>
   <Nav />
   <main id="skip" className="mt-24 flex flex-col justify-center antialiased">
    <Twemoji options={{ className: "twemoji" }}>
     <motion.div {...variants}>{children}</motion.div>
    </Twemoji>
   </main>
   <Footer />
  </>
 );
}
