import { getPlaiceholder } from "plaiceholder";

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
 const { base64 } = await getPlaiceholder(image);
 cache.set(image, base64);
 return base64;
}
