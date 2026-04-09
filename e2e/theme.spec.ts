import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Theme Switching", () => {
  test("default theme loads without errors", async ({ page }) => {
    await page.goto("/");

    // Check that the page loads successfully
    await expect(page.getByTestId("child_1_attend")).toBeVisible();

    // Check that theme attribute exists on root element
    const themeAttr = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });
    expect(themeAttr).toBeTruthy();
  });

  test("clicking theme-toggle switches between light and dark themes", async ({ page }) => {
    await page.goto("/");

    // Get initial theme
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });

    // Click theme toggle
    await page.getByTestId("theme-toggle").click();

    // Get new theme
    const newTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });

    // Theme should have changed
    expect(newTheme).not.toBe(initialTheme);
    expect(newTheme === "light" || newTheme === "dark").toBe(true);
  });

  test("theme preference persists after page reload", async ({ page }) => {
    await page.goto("/");

    // Get initial theme
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });

    // Toggle theme
    await page.getByTestId("theme-toggle").click();

    // Get changed theme
    const changedTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });

    // Reload page
    await page.reload();

    // Get theme after reload
    const reloadedTheme = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });

    // Theme should match the changed theme (persisted)
    expect(reloadedTheme).toBe(changedTheme);
    expect(reloadedTheme).not.toBe(initialTheme);
  });

  test("theme class/attribute is applied to the root element", async ({ page }) => {
    await page.goto("/");

    // Check that root element has theme attribute
    const hasThemeAttr = await page.evaluate(() => {
      const root = document.documentElement;
      return root.hasAttribute("data-theme");
    });
    expect(hasThemeAttr).toBe(true);

    // Toggle theme and verify attribute changes
    await page.getByTestId("theme-toggle").click();

    const themeAfterToggle = await page.evaluate(() => {
      return document.documentElement.getAttribute("data-theme");
    });
    expect(themeAfterToggle === "light" || themeAfterToggle === "dark").toBe(true);
  });
});
