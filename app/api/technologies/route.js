import { technologies } from "config";

export const runtime = "edge";

export async function GET() {
 return new Response(JSON.stringify(technologies), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
  },
 });
}
