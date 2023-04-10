import { meta } from "/config";

export const metadata = {
 title: "Photography",
 description: "Photography is a passion of mine. I love capturing moments and telling stories through my lens. I hope you enjoy my work.",
 metadataBase: new URL(meta.url),
};

export default function Layout({ children, modal }) {
 return (
  <>
   {children}
   {modal}
  </>
 );
}
