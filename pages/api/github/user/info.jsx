import { GetUserData } from "/lib/graphQl";

export default async function handler(req, res) {
 const start = Date.now();
 const user = await GetUserData();
 res.setHeader("Server-Timing", `response;dur=${Date.now() - start}ms`);
 res.status(200).json(user);
}
