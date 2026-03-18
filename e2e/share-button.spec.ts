import {expect, test} from 'playwright/test';
import {describe} from 'node:test';

describe('Share button', () => {
    test('share button is always visible in side menu without dev mode', async ({page}) => {
        await page.goto('http://localhost:4173/');

        // Open the side menu by clicking the hamburger button
        await page.locator('side-menu-container').getByRole('button').first().click();

        // The share button should be visible without any dev mode activation
        await expect(page.getByTestId('share-state-button')).toBeVisible();
    });
});
