import { GetRepos } from "lib/graphql";

// Type: [private, public]
// Count: Number of repos to return [min 0, max 50]

export const runtime = "edge";

export async function GET(request) {
 const start = Date.now();
 let { type, count } = Object.fromEntries(new URL(request.url.replaceAll("&amp%3B", "&")).searchParams.entries());
 if (!type) type = "public";
 if (!count) count = "10";
 type = type && typeof type === "string" ? type.toLowerCase() : "";
 count = count && typeof count === "string" ? count.toLowerCase() : "";

 if (type !== "private" && type !== "public") {
  return new Response(
   JSON.stringify({
    error: "Invalid type. Type must be either 'private' or 'public'",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }
 if (isNaN(count)) {
  return new Response(
   JSON.stringify({
    error: "Invalid count. Count must be a number",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 } else if (count <= 0) {
  return new Response(
   JSON.stringify({
    error: "Count must be greater than 0",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 } else if (count > 50) {
  return new Response(
   JSON.stringify({
    error: "Count must be less than 50",
   }),
   {
    status: 400,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }

 const { user } = await GetRepos(type, count);
 if (type === "private") {
  return new Response(JSON.stringify(user), {
   status: 200,
   headers: {
    "Content-Type": "application/json",
    "Server-Timing": `response;dur=${Date.now() - start}ms`,
   },
  });
 } else {
  const repositories = user.repositories.edges.map((edge) => edge.node);
  repositories.sort((a, b) => b.stars - a.stars || a.isArchived - b.isArchived);
  return new Response(JSON.stringify(repositories), {
   status: 200,
   headers: {
    "Content-Type": "application/json",
    "Server-Timing": `response;dur=${Date.now() - start}ms`,
   },
  });
 }
}
