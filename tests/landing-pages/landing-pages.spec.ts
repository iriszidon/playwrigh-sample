import { test, expect } from "@playwright/test";

test.describe("Landing pages tests", () => {
  test.only("open_some_link", async ({ page }) => {
    const pageUnderTest = process.env.FOTRADE_LP
      ? process.env.FOTRADE_LP
      : "https://www.n12.co.il/";
    await page.goto(pageUnderTest);
  });
});
