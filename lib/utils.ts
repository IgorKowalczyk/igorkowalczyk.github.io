import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const ConvertBytes = (bytes: number): string => {
 const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
 if (!bytes) return "n/a";
 const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)).toString(), 10);
 return `${(bytes / Math.pow(1000, i)).toFixed(1)} ${sizes[i]}`;
};

export const ConvertNumber = (number: number): string => {
 return Intl.NumberFormat("en-US", {
  notation: "compact",
  style: "decimal",
  maximumFractionDigits: 2,
 }).format(number);
};

export const parseISO = (date: string): string => {
 const formatted = new Date(date);
 return `${formatted.toLocaleString("en-us", {
  month: "long",
 })} ${formatted.getUTCDate()}, ${formatted.getFullYear()}`;
};

/* eslint-disable typescript/no-explicit-any */
export function stripTypenames(value: any): any {
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

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

const idToRequestCount = new Map<string, number>(); 
const rateLimiter = {
  windowStart: Date.now(),
  windowSize: 60 * 1000, // 1 minute
  maxRequests: 1,
};

export const rateLimit = (ip: string) => {
  const now = Date.now();
  const isNewWindow = now - rateLimiter.windowStart > rateLimiter.windowSize;
  if (isNewWindow) {
    rateLimiter.windowStart = now;
    idToRequestCount.set(ip, 0);
  }

  const currentRequestCount = idToRequestCount.get(ip) ?? 0;
  if (currentRequestCount >= rateLimiter.maxRequests) return true;
  idToRequestCount.set(ip, currentRequestCount + 1);

  return false;
};