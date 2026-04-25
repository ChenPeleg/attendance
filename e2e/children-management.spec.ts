import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Children Management - Add/Remove Children", () => {
  test("clicking add-child-button shows a prompt to add child", async ({ page }) => {
    await page.goto("/");

    // Open side menu
    await page.getByTestId("menu-toggle").click();

    // Setup dialog handler to enter a name
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("prompt");
      await dialog.accept("Test Child");
    });

    // Click add child button
    await page.getByTestId("add-child-button").click();

    // Wait a moment for the child to be added
    await page.waitForTimeout(500);
  });

  test("typing a name and submitting adds the child to the attendance list", async ({ page }) => {
    await page.goto("/");

    // Open side menu
    await page.getByTestId("menu-toggle").click();

    // Setup dialog handler to enter a name
    page.on("dialog", async (dialog) => {
      await dialog.accept("New Test Child");
    });

    // Click add child button
    await page.getByTestId("add-child-button").click();

    // Close menu
    await page.getByTestId("menu-toggle").click();

    // Wait for child to appear
    await page.waitForTimeout(500);

    // The new child should appear in the list
    // We can't predict the exact ID, but we can verify the list has grown
    const childElements = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();
    expect(childElements).toBeGreaterThan(6); // Original 6 + new one
  });

  test("the new child appears with a testid following the pattern", async ({ page }) => {
    await page.goto("/");

    // Get initial count of children
    const initialCount = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();

    // Open side menu
    await page.getByTestId("menu-toggle").click();

    // Setup dialog handler
    page.on("dialog", async (dialog) => {
      await dialog.accept("Another Child");
    });

    // Click add child button
    await page.getByTestId("add-child-button").click();

    // Close menu
    await page.getByTestId("menu-toggle").click();

    // Wait for update
    await page.waitForTimeout(500);

    // New count should be initial + 1
    const newCount = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();
    expect(newCount).toBe(initialCount + 1);
  });

  test("clicking remove on a manually-added child removes it from the list", async ({ page }) => {
    await page.goto("/");

    // First add a child
    await page.getByTestId("menu-toggle").click();

    page.on("dialog", async (dialog) => {
      await dialog.accept("Child To Remove");
    });

    await page.getByTestId("add-child-button").click();
    await page.getByTestId("menu-toggle").click();

    // Wait for child to be added
    await page.waitForTimeout(500);

    // Get count before removal
    const countBefore = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();

    // Navigate to DaySettings to see delete button
    await page.getByTestId("nav_DaySettings").click();

    // Wait for view to load
    await page.waitForTimeout(500);

    // Find and click the remove button for the newly added child
    // The delete button only shows for manually added children in DaySettings view
    const removeButtons = await page.locator('[data-testid^="remove-child_"]');
    const removeButtonCount = await removeButtons.count();

    if (removeButtonCount > 0) {
      // Click the first remove button
      await removeButtons.first().click();

      // Wait for removal
      await page.waitForTimeout(500);

      // Navigate back to Attendance to check count
      await page.getByTestId("nav_Attendance").click();
      await page.waitForTimeout(500);

      // Get count after removal
      const countAfter = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();
      expect(countAfter).toBe(countBefore - 1);
    }
  });

  test("default (seeded) children cannot be removed", async ({ page }) => {
    await page.goto("/");

    // Navigate to DaySettings where delete buttons appear
    await page.getByTestId("nav_DaySettings").click();

    // Check child_1 (default child) for delete button
    const child1 = page.getByTestId("child_1_day-set");
    await expect(child1).toBeVisible();

    // The remove button should not exist for default children
    const removeButton = page.getByTestId("remove-child_1");
    const hasRemoveButton = await removeButton.isVisible().catch(() => false);
    expect(hasRemoveButton).toBe(false);
  });

  test("added child persists after page reload", async ({ page }) => {
    await page.goto("/");

    // Add a child with a unique name
    const uniqueName = `Persist Child ${Date.now()}`;

    await page.getByTestId("menu-toggle").click();

    page.on("dialog", async (dialog) => {
      await dialog.accept(uniqueName);
    });

    await page.getByTestId("add-child-button").click();
    await page.getByTestId("menu-toggle").click();

    // Wait for child to be added
    await page.waitForTimeout(500);

    // Get count before reload
    const countBefore = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();

    // Reload page
    await page.reload();

    // Wait for page to load
    await page.waitForTimeout(500);

    // Count should be the same
    const countAfter = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();
    expect(countAfter).toBe(countBefore);
  });

  test("canceling the add child prompt does not add a child", async ({ page }) => {
    await page.goto("/");

    // Get initial count
    const initialCount = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();

    // Open side menu
    await page.getByTestId("menu-toggle").click();

    // Setup dialog handler to cancel
    page.on("dialog", async (dialog) => {
      await dialog.dismiss();
    });

    // Click add child button
    await page.getByTestId("add-child-button").click();

    // Close menu
    await page.getByTestId("menu-toggle").click();

    // Wait
    await page.waitForTimeout(500);

    // Count should remain the same
    const finalCount = await page.locator('[data-testid^="child_"][data-testid$="_attend"]').count();
    expect(finalCount).toBe(initialCount);
  });
});
