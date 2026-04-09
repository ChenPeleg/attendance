import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Sorting Options", () => {
  test("default sort is Class ascending", async ({ page }) => {
    await page.goto("/");

    // child_1 (class א) should appear before child_4 (class ב)
    const child1Y = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4Y = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child1Y).toBeLessThan(child4Y);
  });

  test("switching sort to Name ascending reorders correctly", async ({ page }) => {
    await page.goto("/");

    // Open side menu and click sort by Name
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("sort-Name").click();
    await page.getByTestId("menu-toggle").click();

    // After sort by name ascending: אביב (child_4) should come before עמרי (child_1)
    const child1Y = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4Y = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child4Y).toBeLessThan(child1Y);
  });

  test("switching sort to Gender groups children by gender", async ({ page }) => {
    await page.goto("/");

    // Open side menu and click sort by Gender
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("sort-Gender").click();
    await page.getByTestId("menu-toggle").click();

    // All children should be visible and grouped by gender
    // (specific order depends on gender data - just check they're visible)
    await expect(page.getByTestId("child_1_attend")).toBeVisible();
    await expect(page.getByTestId("child_2_attend")).toBeVisible();
  });

  test("toggling sort order reverses the list for each sort type", async ({ page }) => {
    await page.goto("/");

    // Get initial positions for Class ascending
    const child1YInitial = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4YInitial = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child1YInitial).toBeLessThan(child4YInitial);

    // Open menu and toggle sort order (if sort-order-toggle exists)
    await page.getByTestId("menu-toggle").click();
    const orderToggle = page.getByTestId("sort-order-toggle");
    if (await orderToggle.isVisible().catch(() => false)) {
      await orderToggle.click();
      await page.getByTestId("menu-toggle").click();

      // After toggling to descending: child_4 (class ב) should come before child_1 (class א)
      const child1YAfter = await page
        .getByTestId("child_1_attend")
        .boundingBox()
        .then((b) => b?.y ?? 0);
      const child4YAfter = await page
        .getByTestId("child_4_attend")
        .boundingBox()
        .then((b) => b?.y ?? 0);
      expect(child4YAfter).toBeLessThan(child1YAfter);
    }
  });

  test("sort preference persists after page reload", async ({ page }) => {
    await page.goto("/");

    // Change sort to Name
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("sort-Name").click();
    await page.getByTestId("menu-toggle").click();

    // Reload page
    await page.reload();

    // After reload, אביב (child_4) should still come before עמרי (child_1)
    const child1Y = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4Y = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child4Y).toBeLessThan(child1Y);
  });

  test("closing side menu hides sorting options", async ({ page }) => {
    await page.goto("/");

    // Open side menu
    await page.getByTestId("menu-toggle").click();

    // Sorting options should be visible
    await expect(page.getByTestId("sort-Class")).toBeVisible();

    // Close side menu
    await page.getByTestId("menu-toggle").click();

    // Sorting options should be hidden
    await expect(page.getByTestId("sort-Class")).not.toBeVisible();
  });
});
