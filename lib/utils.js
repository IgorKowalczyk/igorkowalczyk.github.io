import { globby } from "globby";

export const ConvertBytes = (bytes) => {
 const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
 if (bytes == 0) return "n/a";
 const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
 return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
};

export const ConvertNumber = (number) => {
 const formatted = Intl.NumberFormat("en-US", {
  notation: "compact",
  style: "decimal",
  maximumFractionDigits: 2,
 }).format(number);
 return formatted;
};

export const parseISO = (date) => {
 const formatted = new Date(date);
 return formatted.toLocaleString("en-us", { month: "long" }) + " " + formatted.getUTCDate() + ", " + formatted.getFullYear();
};

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
 return photos;
};