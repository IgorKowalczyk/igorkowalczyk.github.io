import { getTotalContributionsForYear } from "./getTotalContributionsForYear";
import { getTotalYears } from "./getTotalYears";

interface ContributionResult {
 year: number;
 totalContributions: number;
}

interface ContributionSummary {
 results: ContributionResult[];
 total: number;
 dates: {
  since: number;
  to: number;
 };
}

export async function getTotalContributionsForYears(): Promise<ContributionSummary> {
 const results: ContributionResult[] = [];
 let total = 0;
 const years: number[] = await getTotalYears();
 const since = years[years.length - 1];
 const to = 0;
 for (const year of years) {
  const totalContributions = await getTotalContributionsForYear(year);
  results.push({ year, totalContributions });
  total += totalContributions;
 }
 return { results, total, dates: { since, to } };
}
