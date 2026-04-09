import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Tab Navigation", () => {
  test("page loads in Attendance view by default", async ({ page }) => {
    await page.goto("/");
    // Check that Attendance nav is active/visible
    const attendanceNav = page.getByTestId("nav_Attendance");
    await expect(attendanceNav).toBeVisible();
  });

  test("clicking nav_SchoolBus switches to SchoolBus view", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_SchoolBus").click();

    // Check that children show with school bus test IDs
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
  });

  test("clicking nav_DaySettings switches to DaySettings view", async ({ page }) => {
    await page.goto("/");
    await page.getByTestId("nav_DaySettings").click();

    // Check that children show with day-set test IDs
    await expect(page.getByTestId("child_1_day-set")).toBeVisible();
  });

  test("clicking nav_Attendance from DaySettings returns to Attendance view", async ({ page }) => {
    await page.goto("/");
    // Navigate to DaySettings
    await page.getByTestId("nav_DaySettings").click();
    await expect(page.getByTestId("child_1_day-set")).toBeVisible();

    // Navigate back to Attendance
    await page.getByTestId("nav_Attendance").click();
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
  });

  test("navigation state persists across page reload", async ({ page }) => {
    await page.goto("/");
    // Navigate to SchoolBus
    await page.getByTestId("nav_SchoolBus").click();
    await expect(page.getByTestId("child_1_attend")).toBeVisible();

    // Reload the page
    await page.reload();

    // Should still be in SchoolBus view
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
  });
});
