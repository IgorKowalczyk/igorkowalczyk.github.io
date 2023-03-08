import { getTotalYears } from "lib/graphQl";

export async function GET(request, { params }) {
 const start = Date.now();
 const year = params.year;
 if (!year) {
  return new Response(
   JSON.stringify({
    error: "Missing Year",
   }),
   {
    status: 200,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }
 const years = await getTotalYears();
 if (!years) {
  return new Response(
   JSON.stringify({
    error: "Missing Year",
   }),
   {
    status: 200,
    headers: {
     "Content-Type": "application/json",
     "Server-Timing": `response;dur=${Date.now() - start}ms`,
    },
   }
  );
 }
 return new Response(JSON.stringify({ message: "Vaild year" }), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   "Server-Timing": `response;dur=${Date.now() - start}ms`,
  },
 });
}
