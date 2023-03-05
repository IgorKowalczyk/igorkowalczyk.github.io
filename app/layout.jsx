import { meta } from "config";
import { Footer } from "components/elements/Footer";
import { Nav } from "components/elements/Nav";
import { ServerThemeProvider } from "next-themes";
import { ClientProviders } from "components/elements/ClientProviders";
import { Inter } from "next/font/google";
import "styles/globals.css";
import "styles/progress.css";

const inter = Inter();

export const metadata = {
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
  images: [
   {
    url: meta.image,
    width: 1920,
    height: 1080,
   },
  ],
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
  author: meta.accounts.twitter.username,
  card: "summary_large_image",
 },
 icons: {
  shortcut: "/favicon.ico",
 },
 verification: {
  google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
  yandex: "14d2e73487fa6c71",
 },
};

export default function RootLayout({ children }) {
 return (
  <ServerThemeProvider attribute="class">
   <html lang="en">
    <body className={`bg-main-white dark:bg-main-dark ${inter.className}`}>
     <Nav />
     <main className="mt-24 flex min-h-screen flex-col px-6 antialiased">
      <ClientProviders>
       <>{children}</>
      </ClientProviders>
     </main>
     <Footer />
    </body>
   </html>
  </ServerThemeProvider>
 );
}
