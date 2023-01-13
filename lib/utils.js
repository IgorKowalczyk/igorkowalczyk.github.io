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
