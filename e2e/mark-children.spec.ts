import { expect, test } from "playwright/test";
import { describe } from "node:test";

describe("Marking children", () => {
  test("clicking on a child marks it", async ({ page }) => {
    await page.goto("http://localhost:4173/");
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
  test("marking all the children create a button with check sign", async ({
    page,
  }) => {
    await page.goto("http://localhost:4173/");
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
    await page.goto("http://localhost:4173/");
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
    expect(await page.getByTestId("all-children-checked").isVisible()).toBe(
      false,
    );
  });

  test("changing sort to name changes the order of children", async ({
    page,
  }) => {
    await page.goto("http://localhost:4173/");

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
