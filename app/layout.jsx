import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Nav } from "components/elements/client/Nav";
import { ProgressBar } from "components/elements/client/Progress";
import { Theme } from "components/elements/client/Theme";
import { Footer } from "components/elements/Footer";
import { Hotjar } from "components/elements/Hotjar";
import { meta } from "config";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import "styles/globals.css";
import "styles/progress.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
 metadataBase: new URL(meta.url),
 title: {
  default: meta.title,
  template: `%s | ${meta.title}`,
 },
 description: meta.description,
 openGraph: {
  title: meta.title,
  description: meta.description,
  url: meta.url,
  siteName: meta.title,
  locale: meta.locale,
  type: "website",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },
 twitter: {
  title: meta.title,
  description: meta.description,
  author: meta.accounts.twitter.username,
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicon.ico",
 },
};

export default function RootLayout({ children, modal }) {
 return (
  <ServerThemeProvider attribute="class">
   <html lang="en">
    <head>{process.env.HOTJAR_ID && <Hotjar id={process.env.HOTJAR_ID} />}</head>
    <body className={clsx("bg-main", inter.className)}>
     <Theme>
      <Nav />
      <main className="mt-24 flex min-h-screen flex-col px-6 antialiased">
       <ProgressBar />
       <Analytics />
       {children}
       {modal}
      </main>
      <Footer />
     </Theme>
    </body>
   </html>
  </ServerThemeProvider>
 );
}
