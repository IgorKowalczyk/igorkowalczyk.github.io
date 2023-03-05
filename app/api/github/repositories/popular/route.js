import { GetPopular } from "lib/graphQl";

export async function GET() {
 const start = Date.now();
 const data = await GetPopular();
 return new Response(JSON.stringify(data.repositories.edges), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   "Server-Timing": `response;dur=${Date.now() - start}ms`,
  },
 });
}
