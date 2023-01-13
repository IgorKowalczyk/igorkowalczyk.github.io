import { getPhotography } from "lib/utils";

export default async function handler(req, res) {
 const photos = await getPhotography();
 res.setHeader("Cache-Control", "s-maxage=604800, stale-while-revalidate");
 res.status(200).json(photos);
}
