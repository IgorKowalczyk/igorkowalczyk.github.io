import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Nav } from "@/components/client/Nav";
import { Providers } from "@/components/client/Providers";
import { Footer } from "@/components/Footer";
import { Hotjar } from "@/components/Hotjar";
import { meta } from "@/config";
import "styles/globals.css";
import { cn } from "@/lib/utils";

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

export const viewport = {
 themeColor: [
  { media: "(prefers-color-scheme: light)", color: "white" },
  { media: "(prefers-color-scheme: dark)", color: "black" },
 ],
};

export default function RootLayout({ children }) {
 return (
  <html lang="en" suppressHydrationWarning>
   <head>{process.env.HOTJAR_ID && <Hotjar id={process.env.HOTJAR_ID} />}</head>
   <body className={cn("", GeistMono.variable, GeistSans.variable)}>
    <Providers>
     <Nav />
     <main className="mt-24 flex min-h-screen flex-col px-6 font-sans antialiased">{children}</main>
     <Footer />
     <Analytics />
    </Providers>
   </body>
  </html>
 );
}
