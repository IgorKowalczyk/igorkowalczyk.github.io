import { Footer } from "components/elements/Footer";
import { Nav } from "components/elements/Nav";
import { ClientProviders } from "components/elements/ClientProviders";
import { ServerThemeProvider } from "next-themes";

import "styles/globals.css";
import "styles/progress.css";

export default function RootLayout({ children }) {
 return (
  <ServerThemeProvider attribute="class">
   <html lang="en">
    <body className="bg-main-white dark:bg-main-dark">
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
