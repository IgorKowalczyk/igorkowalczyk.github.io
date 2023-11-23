import { getTotalYears } from "lib/graphql";

export const runtime = "edge";

export async function GET() {
 const start = Date.now();
 const user = await getTotalYears();
 return new Response(JSON.stringify(user), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   ...(process.env.NODE_ENV !== "production" && {
    "Server-Timing": `response;dur=${Date.now() - start}ms`,
   }),
  },
 });
}
