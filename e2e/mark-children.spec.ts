import {expect, test} from 'playwright/test';
import {describe} from 'node:test';

describe('Marking children', () => {
    test('clicking on a child marks it', async ({page}) => {
        await page.goto('http://localhost:4173/');
        expect(await page.getByTestId('child_1_attend').getByTestId('check-mark').isVisible()).toBe(false);
        await page.getByTestId('child_1_attend').click();
        expect(await page.getByTestId('child_1_attend').getByTestId('check-mark').isVisible()).toBe(true);

    });
    test('marking all the children create a button with check sign', async ({page}) => {
        await page.goto('http://localhost:4173/');
        await page.getByTestId('child_1_attend').click();
        await page.getByTestId('child_2_attend').click();
        await page.getByTestId('child_3_attend').click();
        await page.getByTestId('child_4_attend').click();
        await page.getByTestId('child_5_attend').click();
        expect(await page.getByTestId('all-children-checked').isVisible()).toBe(false);
        await page.getByTestId('child_6_attend').click();
        expect(await page.getByTestId('all-children-checked').isVisible()).toBe(true);
    });
    test('clicking finish after marking all the children clears children', async ({page}) => {
        await page.goto('http://localhost:4173/');
        await page.getByTestId('child_1_attend').click();
        await page.getByTestId('child_2_attend').click();
        await page.getByTestId('child_3_attend').click();
        await page.getByTestId('child_4_attend').click();
        await page.getByTestId('child_5_attend').click();
        await page.getByTestId('child_6_attend').click();
        expect(await page.getByTestId('child_1_attend').getByTestId('check-mark').isVisible()).toBe(true);
        expect(await page.getByTestId('child_2_attend').getByTestId('check-mark').isVisible()).toBe(true);
        await page.getByTestId('children-count').click()
        expect(await page.getByTestId('all-children-checked').isVisible()).toBe(false);
        expect(await page.getByTestId('all-children-checked').isVisible()).toBe(false);
    });

});


