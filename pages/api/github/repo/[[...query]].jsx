import { GetRepos } from "lib/graphQl";

// Type: [private, public]
// Count: Number of repos to return [min 0, max 50]

export default async function handler(req, res) {
 const start = Date.now();
 const { query } = req.query;
 const type = typeof query[0] === "string" ? query[0].toLowerCase() : "";
 const count = typeof query[1] === "string" ? query[1].toLowerCase() : "";
 if (type !== "private" && type !== "public") {
  return res.status(400).json({
   error: "Invalid type",
  });
 }
 if (isNaN(count)) {
  return res.status(400).json({ error: "Invalid count" });
 } else if (count <= 0) {
  return res.status(400).json({
   error: "Count must be greater than 0",
  });
 } else if (count > 50) {
  return res.status(400).json({
   error: "Count must be less than 50",
  });
 }

 const { user } = await GetRepos(type, count);
 const repositories = user.repositories.edges.map((edge) => edge.node);
 repositories.sort((a, b) => b.stars - a.stars || a.isArchived - b.isArchived);
 res.setHeader("Server-Timing", `response;dur=${Date.now() - start}ms`);
 res.status(200).json(repositories);
}
