/**
 * @param {string} query Query to send
 * @param {Object} variables Variables for query
 * @returns {Promise<any>} Data
 * */
export async function requestGraphql(query, variables) {
 const data = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: {
   Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ query, variables }),
 });
 return data.json();
}
