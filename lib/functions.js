import { globby } from "globby";

export const getPhotography = async () => {
 const files = await globby("public/photography/*.{jpg,png,jpeg}");
 const photos = files.map((file) => {
  const name = parseInt(file.split("/").slice(-1)[0].split(".")[0]);
  const path = file.split("/").slice(1).join("/");
  return {
   id: name,
   path: "/" + path,
  };
 });
 photos.sort((a, b) => a.id - b.id);

 return photos || [];
};
