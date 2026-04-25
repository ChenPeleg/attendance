import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("DaySettings View", () => {
  test("children list shows with DaySettings testids", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_DaySettings").click();

    // Check that children have day-set test IDs
    await expect(page.getByTestId("child_1_day-set")).toBeVisible();
    await expect(page.getByTestId("child_2_day-set")).toBeVisible();
    await expect(page.getByTestId("child_3_day-set")).toBeVisible();
  });

  test("clicking a child in DaySettings marks them absent for the day", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_DaySettings").click();

    // Click to mark child as absent
    await page.getByTestId("child_1_day-set").click();

    // Verify the status indicator shows absent
    const statusLabel = page.getByTestId("child_1_day-set").getByTestId("day-set-status");
    await expect(statusLabel).toContainText("נעדר");
  });

  test("an absent child no longer appears in Attendance view", async ({ page }) => {
    await page.goto("/");

    // Mark child as absent in DaySettings
    await page.getByTestId("nav_DaySettings").click();
    await page.getByTestId("child_1_day-set").click();

    // Switch to Attendance view
    await page.getByTestId("nav_Attendance").click();

    // Child 1 should not be visible or should be hidden
    const child1InAttendance = page.getByTestId("child_1_attend");
    // Note: Depending on implementation, it might be hidden or not rendered
    // We check if it's either not visible or not in the DOM
    const isVisible = await child1InAttendance.isVisible().catch(() => false);
    expect(isVisible).toBe(false);
  });

  test("re-clicking an absent child in DaySettings marks them present again", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_DaySettings").click();

    // Mark child as absent
    await page.getByTestId("child_1_day-set").click();
    const statusAfterFirst = page.getByTestId("child_1_day-set").getByTestId("day-set-status");
    await expect(statusAfterFirst).toContainText("נעדר");

    // Click again to mark present
    await page.getByTestId("child_1_day-set").click();
    const statusAfterSecond = page.getByTestId("child_1_day-set").getByTestId("day-set-status");
    await expect(statusAfterSecond).toContainText("נמצא");
  });

  test("marking a child absent, switching to Attendance, then back to DaySettings preserves the absent state", async ({ page }) => {
    await page.goto("/");

    // Mark child as absent
    await page.getByTestId("nav_DaySettings").click();
    await page.getByTestId("child_1_day-set").click();

    // Switch to Attendance
    await page.getByTestId("nav_Attendance").click();

    // Switch back to DaySettings
    await page.getByTestId("nav_DaySettings").click();

    // Child should still be marked as absent
    const statusLabel = page.getByTestId("child_1_day-set").getByTestId("day-set-status");
    await expect(statusLabel).toContainText("נעדר");
  });
});
