import "server-only";
import { globby } from "globby";

type Photo = { id: number; path: string };

const cache: Map<string, Photo | Photo[]> = new Map();

export const getPhoto = async (id: string): Promise<Photo | null> => {
 if (cache.has(id)) {
  return cache.get(id) as Photo;
 }

 const file = await globby(`public/assets/photography/${id}.{jpg,png,jpeg}`);
 if (!file || !file[0]) return null;
 const name = parseInt(file[0].split("/").slice(-1)[0].split(".")[0]);
 const path = file[0].split("/").slice(1).join("/");
 const photo: Photo = { id: name, path: "/" + path };
 cache.set(id, photo);
 return photo;
};

export const getPhotography = async (): Promise<Photo[] | null> => {
 const files = await globby("public/assets/photography/*.{jpg,png,jpeg}");
 const photos: Photo[] = [];
 for (const file of files) {
  if (cache.has(file)) {
   photos.push(cache.get(file) as Photo);
   continue;
  }
  const name = parseInt(file.split("/").slice(-1)[0].split(".")[0]);
  const path = file.split("/").slice(1).join("/");
  const photo: Photo = { id: name, path: "/" + path };
  photos.push(photo);
  cache.set(file, photo);
 }

 photos.sort((a, b) => a.id - b.id);
 return photos;
};
