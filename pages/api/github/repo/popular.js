import { GetPopular } from "lib/graphQl";

export default async function handler(_, res) {
 const start = Date.now();
 const data = await GetPopular();
 res.setHeader("Server-Timing", `response;dur=${Date.now() - start}ms`);
 res.status(200).json(data.repositories.edges);
}
