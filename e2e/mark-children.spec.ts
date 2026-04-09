import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Marking children", () => {
  test("clicking on a child marks it", async ({ page }) => {
    await page.goto("/");
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(false);
    await page.getByTestId("child_1_attend").click();
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(true);
  });

  test("clicking a marked child unmarks it (check-out)", async ({ page }) => {
    await page.goto("/");
    // Mark the child
    await page.getByTestId("child_1_attend").click();
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(true);
    // Unmark the child
    await page.getByTestId("child_1_attend").click();
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(false);
  });

  test("children-count shows correct fraction as children are marked", async ({
    page,
  }) => {
    await page.goto("/");
    // Initially should show 0/6
    const initialCount = await page.getByTestId("children-count").textContent();
    expect(initialCount).toContain("0");
    expect(initialCount).toContain("6");

    // Mark 3 children
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();
    await page.getByTestId("child_3_attend").click();

    // Should show 3/6
    const partialCount = await page.getByTestId("children-count").textContent();
    expect(partialCount).toContain("3");
    expect(partialCount).toContain("6");
  });

  test("marking all the children create a button with check sign", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();
    await page.getByTestId("child_3_attend").click();
    await page.getByTestId("child_4_attend").click();
    await page.getByTestId("child_5_attend").click();
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      false,
    );
    await page.getByTestId("child_6_attend").click();
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      true,
    );
  });

  test("clicking finish after marking all the children clears children", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();
    await page.getByTestId("child_3_attend").click();
    await page.getByTestId("child_4_attend").click();
    await page.getByTestId("child_5_attend").click();
    await page.getByTestId("child_6_attend").click();
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(true);
    expect(
      await page
        .getByTestId("child_2_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(true);
    await page.getByTestId("children-count").click();
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      false,
    );
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(false);
  });

  test("marking all then clicking finish removes all-children-checked and resets check-marks", async ({
    page,
  }) => {
    await page.goto("/");
    // Mark all children
    await page.getByTestId("child_1_attend").click();
    await page.getByTestId("child_2_attend").click();
    await page.getByTestId("child_3_attend").click();
    await page.getByTestId("child_4_attend").click();
    await page.getByTestId("child_5_attend").click();
    await page.getByTestId("child_6_attend").click();

    // Verify all-children-checked is visible
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      true,
    );

    // Click finish (children-count)
    await page.getByTestId("children-count").click();

    // Verify all-children-checked is no longer visible
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      false,
    );

    // Verify all check-marks are reset
    expect(
      await page
        .getByTestId("child_1_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(false);
    expect(
      await page
        .getByTestId("child_2_attend")
        .getByTestId("check-mark")
        .isVisible(),
    ).toBe(false);
  });

  test("changing sort to name changes the order of children", async ({
    page,
  }) => {
    await page.goto("/");

    // Default sort is by Class (ascending): child_1 (class א) appears before child_4 (class ב)
    const child1YBefore = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4YBefore = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child1YBefore).toBeLessThan(child4YBefore);

    // Open side menu and click sort by Name
    await page.getByTestId("menu-toggle").click();
    await page.getByTestId("sort-Name").click();
    await page.getByTestId("menu-toggle").click();

    // After sort by name ascending: אביב (child_4) should come before עמרי (child_1)
    const child1YAfter = await page
      .getByTestId("child_1_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    const child4YAfter = await page
      .getByTestId("child_4_attend")
      .boundingBox()
      .then((b) => b?.y ?? 0);
    expect(child4YAfter).toBeLessThan(child1YAfter);
  });
});
