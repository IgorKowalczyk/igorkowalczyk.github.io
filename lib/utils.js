export const ConvertBytes = (bytes) => {
 const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
 if (!bytes) return "n/a";
 const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
 return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
};

export const ConvertNumber = (number) => {
 return Intl.NumberFormat("en-US", {
  notation: "compact",
  style: "decimal",
  maximumFractionDigits: 2,
 }).format(number);
};

export const parseISO = (date) => {
 const formatted = new Date(date);
 return `${formatted.toLocaleString("en-us", {
  month: "long",
 })} ${formatted.getUTCDate()}, ${formatted.getFullYear()}`;
};

export const changeDecorations = async (decorations) => {
 document.documentElement.style.setProperty("--hidden", decorations === "false" ? "none" : "block");
};

export function stripTypenames(value) {
 if (Array.isArray(value)) {
  return value.map(stripTypenames);
 } else if (value !== null && typeof value === "object") {
  const newObject = {};
  for (const property in value) {
   if (property !== "__typename") {
    newObject[property] = stripTypenames(value[property]);
   }
  }
  return newObject;
 } else {
  return value;
 }
}
