import { getTotalYears, getTotalContributionsForYear } from "lib/graphql";

export const runtime = "edge";

export async function GET(request, { params }) {
 const start = Date.now();
 const year = params.year;
 if (!year) {
  return new Response(
   JSON.stringify({
    error: "No year provided",
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
 const years = await getTotalYears();
 if (!years.includes(parseInt(year))) {
  return new Response(
   JSON.stringify({
    error: "Invalid Year, year is out of range. For vaild range check /api/github/user/contributions/years!",
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

 const totalContributions = await getTotalContributionsForYear(year);
 return new Response(JSON.stringify({ year, totalContributions }), {
  status: 200,
  headers: {
   "Content-Type": "application/json",
   "Server-Timing": `response;dur=${Date.now() - start}ms`,
  },
 });
}
