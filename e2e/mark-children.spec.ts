import { test, expect } from 'playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('button', { name: 'menu close-menu' }).click();
    await page.getByRole('button', { name: 'light theme' }).click();
    await page.getByRole('button', { name: 'menu' }).nth(2).click();
    await page.getByRole('button', { name: 'light-mode' }).click();
    await page.getByRole('button', { name: 'menu close-menu' }).click();
    await page.getByRole('button', { name: 'עמרי' }).click();
    await page.getByRole('button', { name: 'מיתר' }).click();
    await page.getByRole('button', { name: 'יסמין' }).click();
    await page.getByRole('button', { name: 'כרם' }).click();
    await page.getByRole('button', { name: 'ניר' }).click();
    await page.getByRole('button', { name: 'יונתן' }).click();
    await page.getByRole('button', { name: 'אסף' }).click();
    await page.getByRole('button', { name: 'עפרי' }).click();
    await page.getByRole('button', { name: 'אביב' }).click();
    await page.getByRole('button', { name: 'נעמי' }).click();
    await page.getByRole('button', { name: 'נמרוד' }).click();
    await page.getByRole('button', { name: 'אשכר' }).click();
    await page.getByRole('button', { name: 'רוני' }).click();
    expect(await page.title()).toBe('Example Domain');
});
