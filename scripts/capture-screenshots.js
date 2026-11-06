/**
 * Playwright Screenshot Capture & Verification Script
 * Captures:
 * 1. Desktop Dark & Light showcase screenshots
 * 2. Mobile Dark & Light showcase screenshots
 * 3. Modal inspector screenshot
 * 4. High-resolution preview screenshot for every single loader (30 designs)
 */

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const loaders = require('./loaders-data.js');

const ROOT_DIR = path.resolve(__dirname, '..');
const SCREENSHOTS_DIR = path.join(ROOT_DIR, 'screenshots');
const LOADERS_SCREENSHOTS_DIR = path.join(SCREENSHOTS_DIR, 'loaders');

[SCREENSHOTS_DIR, LOADERS_SCREENSHOTS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

(async () => {
  console.log('🚀 Launching Chromium for Loader Lab screenshot capture...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const indexUrl = 'file://' + path.join(ROOT_DIR, 'index.html');

  // -------------------------------------------------------------
  // 1. Desktop Screenshots (1440x1080)
  // -------------------------------------------------------------
  console.log('📸 Capturing Desktop Showcase (Dark & Light)...');
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 1080 },
    deviceScaleFactor: 2
  });
  const desktopPage = await desktopContext.newPage();

  // Desktop Dark
  await desktopPage.goto(indexUrl, { waitUntil: 'load' });
  await desktopPage.evaluate(() => localStorage.setItem('loader-lab-theme', 'dark'));
  await desktopPage.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await desktopPage.waitForTimeout(500); // Allow CSS animations to initialize
  await desktopPage.screenshot({
    path: path.join(SCREENSHOTS_DIR, 'showcase-desktop-dark.png'),
    fullPage: false
  });
  console.log('  ✓ Captured showcase-desktop-dark.png');

  // Desktop Light
  await desktopPage.click('#themeToggleBtn');
  await desktopPage.waitForTimeout(400);
  await desktopPage.screenshot({
    path: path.join(SCREENSHOTS_DIR, 'showcase-desktop-light.png'),
    fullPage: false
  });
  console.log('  ✓ Captured showcase-desktop-light.png');

  // Switch back to dark for Modal Inspector Preview
  await desktopPage.click('#themeToggleBtn');
  await desktopPage.waitForTimeout(300);
  console.log('📸 Capturing Modal Inspector...');
  await desktopPage.click('.inspect-btn');
  await desktopPage.waitForTimeout(400);
  await desktopPage.screenshot({
    path: path.join(SCREENSHOTS_DIR, 'modal-inspector.png'),
    fullPage: false
  });
  console.log('  ✓ Captured modal-inspector.png');

  // Close modal
  await desktopPage.click('#modalCloseBtn');
  await desktopPage.waitForTimeout(300);

  // -------------------------------------------------------------
  // 2. Mobile Screenshots (375x812 - iPhone X/12)
  // -------------------------------------------------------------
  console.log('📱 Capturing Mobile Showcase (Dark & Light)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();

  // Mobile Dark
  await mobilePage.goto(indexUrl, { waitUntil: 'load' });
  await mobilePage.evaluate(() => localStorage.setItem('loader-lab-theme', 'dark'));
  await mobilePage.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOTS_DIR, 'showcase-mobile-dark.png'),
    fullPage: false
  });
  console.log('  ✓ Captured showcase-mobile-dark.png');

  // Mobile Light
  await mobilePage.click('#themeToggleBtn');
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({
    path: path.join(SCREENSHOTS_DIR, 'showcase-mobile-light.png'),
    fullPage: false
  });
  console.log('  ✓ Captured showcase-mobile-light.png');

  await desktopContext.close();
  await mobileContext.close();

  // -------------------------------------------------------------
  // 3. Individual Loader Screenshots (All 30 Loaders)
  // -------------------------------------------------------------
  console.log(`🖼️  Capturing individual screenshots for all ${loaders.length} loaders...`);
  const loaderContext = await browser.newContext({
    viewport: { width: 440, height: 260 },
    deviceScaleFactor: 2
  });
  const loaderPage = await loaderContext.newPage();

  for (const loader of loaders) {
    const fileUrl = 'file://' + path.join(ROOT_DIR, 'loaders', `${loader.id}.html`);
    await loaderPage.goto(fileUrl, { waitUntil: 'load' });
    await loaderPage.waitForTimeout(350); // Mid-cycle animation capture
    await loaderPage.screenshot({
      path: path.join(LOADERS_SCREENSHOTS_DIR, `${loader.id}.png`),
      fullPage: false
    });
    process.stdout.write(`.`);
  }
  console.log(`\n  ✓ All ${loaders.length} individual loader screenshots captured!`);

  await loaderContext.close();
  await browser.close();
  console.log('🎉 Screenshot capture complete!');
})();
