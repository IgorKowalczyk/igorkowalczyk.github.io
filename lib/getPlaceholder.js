import { getPlaiceholder } from "plaiceholder";
import path from "node:path";
import fs from "node:fs/promises";

const cache = new Map();

/**
 * @param {string} image Image path
 * @returns {Promise<string>} Base64 image placeholder
 * @description Returns base64 image placeholder
 */
export async function getPlaiceholderImage(image) {
 if (cache.has(image)) {
  return cache.get(image);
 }
 const buffer = await fs.readFile(path.join(process.cwd(), "public", image));
 const { base64 } = await getPlaiceholder(buffer);
 cache.set(image, base64);
 return base64;
}
