import { meta } from "config";

export default function manifest() {
 return {
  name: meta.title,
  short_name: meta.title,
  description: meta.description,
  start_url: "/?source=pwa",
  scope: "/",
  display: "minimal-ui",
  background_color: "#101011",
  theme_color: "#151515",
  icons: [
   {
    src: "/favicon.ico",
    sizes: "any",
    type: "image/x-icon",
   },
  ],
  ...meta.browserManifestShortcuts,
 };
}
