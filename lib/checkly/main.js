const endpoints = ["/"];
const view = async (endpoint, chrome, page, index, delay) => {
 const default_url = process.env.ENVIRONMENT_URL || "https://igorkowalczyk.dev";
 const response = await page.goto(`${default_url}${endpoint}`, { waitUntil: "domcontentloaded" });
 if (response.status() > 399) {
  throw new Error(`Failed getting path ${endpoint}! Path response code ${response.status()}`);
 }
 await delay(3000);
 await page.screenshot({ path: `${index}.png`, fullPage: true });
 await delay(500);
 await page.close();
 if (index + 1 == endpoints.length) {
  await chrome.close();
 }
};

(async () => {
 const { chromium } = require("playwright");
 const chrome = await chromium.launch();
 const user = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 Checkly/portfolio_check";
 const context = await chrome.newContext({
  userAgent: user,
 });

 const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
 endpoints.forEach(async (endpoint, index) => {
  await delay(3000);
  const page = await context.newPage();
  await view(endpoint, chrome, page, index, delay);
 });
})();
