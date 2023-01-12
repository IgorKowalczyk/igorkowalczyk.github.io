import { globby } from "globby";

export default async function handler(req, res) {
 const files = await globby("public/photography/*.{jpg,png,jpeg}");
 const photos = files.map((file) => {
  const name = parseInt(file.split("/").slice(-1)[0].split(".")[0]);
  const path = file.split("/").slice(1).join("/");
  return {
   id: name,
   path: "/" + path,
  };
 });

 res.setHeader("Cache-Control", "s-maxage=604800, stale-while-revalidate");
 res.status(200).json(photos);
}
