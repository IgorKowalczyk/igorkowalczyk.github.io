import { getPhotography } from "lib/getPhotography";

export async function GET() {
 const start = Date.now();
 const photos = await getPhotography();
 return new Response(JSON.stringify(photos), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   ...(process.env.NODE_ENV !== "production" && {
    "Server-Timing": `response;dur=${Date.now() - start}ms`,
   }),
  },
 });
}
