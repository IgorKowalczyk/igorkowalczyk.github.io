import "server-only";

import { globby } from "globby";

const cache = new Map();

/**
 * @param {string} id ID of photo
 * @returns {Promise<Array>} Array of photos or single photo
 * @description Returns array of photos or single photo
 * */
export const getPhotography = async (id) => {
 if (id && cache.has(id)) {
  return cache.get(id);
 }

 if (id) {
  const file = await globby(`public/assets/photography/${id}.{jpg,png,jpeg}`);
  if (!file || !file[0]) return null;
  const name = parseInt(file[0].split("/").slice(-1)[0].split(".")[0]);
  const path = file[0].split("/").slice(1).join("/");
  cache.set(id, {
   id: name,
   path: "/" + path,
  });
  return cache.get(id);
 }

 const files = await globby("public/assets/photography/*.{jpg,png,jpeg}");
 const photos = [];
 for (const file of files) {
  if (cache.has(file)) {
   photos.push(cache.get(file));
   continue;
  }
  const name = parseInt(file.split("/").slice(-1)[0].split(".")[0]);
  const path = file.split("/").slice(1).join("/");
  photos.push({
   id: name,
   path: "/" + path,
  });
  cache.set(file, {
   id: name,
   path: "/" + path,
  });
 }

 photos.sort((a, b) => a.id - b.id);
 return photos || [];
};
