import { getPhotography } from "lib/functions";

export default async function handler(_, res) {
 const start = Date.now();
 const photos = await getPhotography();
 res.setHeader("Server-Timing", `response;dur=${Date.now() - start}ms`);
 res.setHeader("Cache-Control", "s-maxage=604800, stale-while-revalidate");
 res.status(200).json(photos);
}
