import "server-only";

import { globby } from "globby";
import { getPlaiceholderImage } from "./getPlaceholder";

// eslint-disable-next-line no-undef
const cache = new Map();

export const getPhotography = async () => {
 const files = await globby("public/assets/photography/*.{jpg,png,jpeg}");
 const photos = [];
 for (const file of files) {
  if (cache.has(file)) {
   photos.push(cache.get(file));
   continue;
  }
  const name = parseInt(file.split("/").slice(-1)[0].split(".")[0]);
  const path = file.split("/").slice(1).join("/");
  const blur = await getPlaiceholderImage("/" + path);
  photos.push({
   id: name,
   path: "/" + path,
   blur: blur,
  });
  cache.set(file, {
   id: name,
   path: "/" + path,
   blur: blur,
  });
 }

 photos.sort((a, b) => a.id - b.id);
 return photos || [];
};
