import { getTotalYears } from "./getTotalYears";
import { getTotalContributionsForYear } from "./getTotalContributionsForYear";

/**
 * @returns {Promise<Object>} Total contributions for years
 * @description Returns total contributions for years
 * */
export async function getTotalContributionsForYears() {
 const results = [];
 let total = 0;
 const years = await getTotalYears();
 const since = years[years.length - 1];
 const to = 0;
 for (const year of years) {
  const totalContributions = await getTotalContributionsForYear(year);
  results.push({ year, totalContributions });
  total += totalContributions;
 }
 return { results, total, dates: { since, to } };
}
