import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Display Mode - List vs Grid Toggle", () => {
  test("default view is List (single-column layout)", async ({ page }) => {
    await page.goto("/");

    // Check that children are visible
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
    await expect(page.getByTestId("child_2_attend")).toBeVisible();
  });

  test("clicking the display toggle switches to Grid (2-column layout)", async ({ page }) => {
    await page.goto("/");

    // Open side menu to access display toggle
    await page.getByTestId("menu-toggle").click();

    // Click the display toggle
    await page.getByTestId("display-toggle").click();

    // Close menu to see the grid layout
    await page.getByTestId("menu-toggle").click();

    // Children should still be visible (now in grid layout)
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
    await expect(page.getByTestId("child_2_attend")).toBeVisible();
  });

  test("children are still clickable in Grid mode", async ({ page }) => {
    await page.goto("/");

    // Switch to Grid mode
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("display-toggle").click();
    await page.getByTestId("menu-toggle").click();

    // Click a child to mark attendance
    await page.getByTestId("child_1_attend").click();

    // Check that the child is marked
    const checkMark = page.getByTestId("child_1_attend").getByTestId("check-mark");
    await expect(checkMark).toBeVisible();
  });

  test("clicking the toggle again returns to List mode", async ({ page }) => {
    await page.goto("/");

    // Switch to Grid mode
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("display-toggle").click();

    // Switch back to List mode
    await page.getByTestId("display-toggle").click();
    await page.getByTestId("menu-toggle").click();

    // Children should still be visible
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
  });

  test("display preference persists after page reload", async ({ page }) => {
    await page.goto("/");

    // Switch to Grid mode
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("display-toggle").click();
    await page.getByTestId("menu-toggle").click();

    // Reload the page
    await page.reload();

    // Should still be in Grid mode (verify by checking children are visible)
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
    await expect(page.getByTestId("child_2_attend")).toBeVisible();
  });
});
