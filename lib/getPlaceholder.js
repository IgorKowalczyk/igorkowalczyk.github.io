import { getPlaiceholder } from "plaiceholder";

// eslint-disable-next-line no-undef
const cache = new Map();

export async function getPlaiceholderImage(image) {
 if (cache.has(image)) {
  return cache.get(image);
 }
 const { base64 } = await getPlaiceholder(image);
 cache.set(image, base64);
 return base64;
}
