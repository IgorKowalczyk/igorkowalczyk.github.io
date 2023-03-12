import { ClientProviders } from "components/elements/ClientProviders";
import { Footer } from "components/elements/Footer";
import { Nav } from "components/elements/Nav";
import ProgressBar from "components/elements/Progress";
import { meta } from "config";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import "styles/globals.css";
import "styles/progress.css";

const inter = Inter({ subsets: ["latin"] });

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
    width: 1200,
    height: 630,
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
};

export default function RootLayout({ children }) {
 return (
  <ServerThemeProvider attribute="class">
   <html lang="en">
    <head>
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
    </head>
    <body className={`bg-main-white dark:bg-main-dark ${inter.className}`}>
     <Nav />
     <main className="mt-24 flex min-h-screen flex-col px-6 antialiased">
      <ClientProviders>
       <ProgressBar />
       <>{children}</>
      </ClientProviders>
     </main>
     <Footer />
    </body>
   </html>
  </ServerThemeProvider>
 );
}
