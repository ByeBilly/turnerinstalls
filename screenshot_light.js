const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({ width: 1280, height: 1600 }); // Taller to capture gallery

        console.log('Navigating to Home...');
        await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

        // Screenshot Home
        await page.screenshot({ path: 'preview_light_home.png', fullPage: true });
        console.log('Captured preview_light_home.png');

        // Screenshot Residential
        console.log('Navigating to Residential...');
        await page.goto('http://localhost:3000/residential', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: 'preview_light_residential.png', fullPage: true });
        console.log('Captured preview_light_residential.png');

        // Screenshot Commercial
        console.log('Navigating to Commercial...');
        await page.goto('http://localhost:3000/commercial', { waitUntil: 'networkidle0' });
        await page.screenshot({ path: 'preview_light_commercial.png', fullPage: true });
        console.log('Captured preview_light_commercial.png');

        await browser.close();
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
