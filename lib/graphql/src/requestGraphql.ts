/* eslint-disable typescript/no-explicit-any */
export async function requestGraphql(query: string, variables: Record<string, any>): Promise<any> {
 const response = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
   Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ query, variables }),
 });
 return response.json();
}
