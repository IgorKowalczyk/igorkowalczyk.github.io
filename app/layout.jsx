import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Nav } from "components/elements/client/Nav";
import { ProgressBar } from "components/elements/client/Progress";
import { Theme } from "components/elements/client/Theme";
import { Footer } from "components/elements/Footer";
import { Hotjar } from "components/elements/Hotjar";
import { meta } from "config";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { ServerThemeProvider } from "next-themes";
import "styles/globals.css";
import "styles/progress.css";

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

export default function RootLayout({ children }) {
 return (
  <ServerThemeProvider attribute="class">
   <html lang="en">
    <head>{process.env.HOTJAR_ID && <Hotjar id={process.env.HOTJAR_ID} />}</head>
    <body className={clsx("bg-main", GeistMono.variable, GeistSans.variable)}>
     <Theme>
      <Nav />
      <main className="mt-24 flex min-h-screen flex-col px-6 font-sans antialiased">
       <ProgressBar />
       <Analytics />
       {children}
      </main>
      <Footer />
     </Theme>
    </body>
   </html>
  </ServerThemeProvider>
 );
}
