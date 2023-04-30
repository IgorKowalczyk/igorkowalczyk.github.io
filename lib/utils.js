/**
 * @param {number} number Bytes to convert
 * @returns {string} Converted bytes
 * */
export const ConvertBytes = (bytes) => {
 const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
 if (!bytes) return "n/a";
 const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)));
 return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
};

/**
 * @param {number} number Number to convert
 * @returns {string} Converted number
 * */
export const ConvertNumber = (number) => {
 return Intl.NumberFormat("en-US", {
  notation: "compact",
  style: "decimal",
  maximumFractionDigits: 2,
 }).format(number);
};

/**
 * @param {string} date Date to convert
 * @returns {string} Converted date
 * */
export const parseISO = (date) => {
 const formatted = new Date(date);
 return `${formatted.toLocaleString("en-us", {
  month: "long",
 })} ${formatted.getUTCDate()}, ${formatted.getFullYear()}`;
};

/**
 * @param {object} value Object to strip
 * @returns {object} Stripped object without __typename
 * */
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
