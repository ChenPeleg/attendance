import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("SchoolBus View", () => {
  test("children list is visible in SchoolBus view", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Check that children are visible with attend test IDs
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
    await expect(page.getByTestId("child_2_attend")).toBeVisible();
    await expect(page.getByTestId("child_3_attend")).toBeVisible();
  });

  test("clicking a child marks them for school bus", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Initially check-mark should not be visible
    const checkMarkBefore = page.getByTestId("child_1_attend").getByTestId("check-mark");
    await expect(checkMarkBefore).not.toBeVisible();

    // Click to mark for school bus
    await page.getByTestId("child_1_attend").click();

    // Check-mark should now be visible
    const checkMarkAfter = page.getByTestId("child_1_attend").getByTestId("check-mark");
    await expect(checkMarkAfter).toBeVisible();
  });

  test("unmarking a child removes the school bus mark", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Mark child for school bus
    await page.getByTestId("child_1_attend").click();
    const checkMarkAfterMark = page.getByTestId("child_1_attend").getByTestId("check-mark");
    await expect(checkMarkAfterMark).toBeVisible();

    // Unmark child
    await page.getByTestId("child_1_attend").click();
    const checkMarkAfterUnmark = page.getByTestId("child_1_attend").getByTestId("check-mark");
    await expect(checkMarkAfterUnmark).not.toBeVisible();
  });

  test("bus-marked children remain marked after navigating away and back", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Mark child for school bus
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();

    // Navigate to Attendance
    await page.getByTestId("nav_Attendance").click();

    // Navigate back to SchoolBus
    await page.getByTestId("nav_SchoolBus").click();

    // Check that marks are preserved
    const checkMark1 = page.getByTestId("child_1_attend").getByTestId("check-mark");
    const checkMark2 = page.getByTestId("child_2_attend").getByTestId("check-mark");
    await expect(checkMark1).toBeVisible();
    await expect(checkMark2).toBeVisible();
  });

  test("count indicator updates correctly", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Check initial count (if counter exists)
    const counter = page.getByTestId("children-count");
    const initialCount = await counter.textContent();
    expect(initialCount).toContain("0");

    // Mark 2 children
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();

    // Check updated count
    const updatedCount = await counter.textContent();
    expect(updatedCount).toContain("2");
  });
});
