// Renders mockups.html into one PNG per screen (light + dark side by side).
// Usage: node plan/playful-style/mockups/render.cjs
const {chromium} = require('playwright');
const path = require('path');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({viewport: {width: 900, height: 900}, deviceScaleFactor: 2});
    await page.goto('file://' + path.join(__dirname, 'mockups.html'));
    const ids = await page.$$eval('.screen', els => els.map(e => e.id));
    for (const [i, id] of ids.entries()) {
        const name = `${String(i + 1).padStart(2, '0')}-${id.replace('s-', '')}.png`;
        await page.locator('#' + id).screenshot({path: path.join(__dirname, name)});
        console.log(name);
    }
    await browser.close();
})();
