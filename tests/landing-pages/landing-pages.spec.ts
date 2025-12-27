import { test, expect } from "@playwright/test";

test.describe("Landing pages tests", () => {
  test.only("open_some_link", async ({ page }) => {
    const pageUnderTest = process.env.FORTRADE_LP
      ? process.env.FORTRADE_LP
      : "https://www.n12.co.il/";
    await page.goto(pageUnderTest);
  });
});
