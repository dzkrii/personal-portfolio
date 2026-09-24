import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.resolve(__dirname, "../public/media/projects");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function capture() {
  console.log("Launching Edge browser via Playwright...");
  const browser = await chromium.launch({
    channel: "msedge",
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2, // 2x for retina sharpness, we can downscale or keep crisp
  });

  const page = await context.newPage();

  async function navigateAndWait(url, readySelector = "nav") {
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });
    // Wait for the cloudflare/browser security check
    console.log("Waiting for security check & page ready selector...");
    await page.waitForTimeout(6000);
    try {
      await page.waitForSelector(readySelector, { timeout: 10000 });
    } catch {
      console.log(`Selector ${readySelector} not immediately found, waiting additional 3s...`);
      await page.waitForTimeout(3000);
    }
    // Wait for animations and images
    await page.waitForTimeout(1500);
  }

  // 1. Hero / Beranda
  await navigateAndWait("https://wakaf.kitabina.org", "header nav");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const heroPng = path.join(targetDir, "wakaf-kitabina-hero.png");
  await page.screenshot({ path: heroPng });
  console.log(`Saved ${heroPng}`);

  // 2. Transparansi Section
  console.log("Scrolling to #transparansi...");
  await page.evaluate(() => {
    const el = document.getElementById("transparansi");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await page.waitForTimeout(1500);
  const transPng = path.join(targetDir, "wakaf-kitabina-transparansi.png");
  await page.screenshot({ path: transPng });
  console.log(`Saved ${transPng}`);

  // 3. Alur Sistem Section
  console.log("Scrolling to #alur...");
  await page.evaluate(() => {
    const el = document.getElementById("alur");
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  });
  await page.waitForTimeout(1500);
  const alurPng = path.join(targetDir, "wakaf-kitabina-alur.png");
  await page.screenshot({ path: alurPng });
  console.log(`Saved ${alurPng}`);

  // 4. Katalog Aset Publik
  await navigateAndWait("https://wakaf.kitabina.org/aset", "h1, h2");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const asetPng = path.join(targetDir, "wakaf-kitabina-aset.png");
  await page.screenshot({ path: asetPng });
  console.log(`Saved ${asetPng}`);

  // 5. Lokasi Kami
  await navigateAndWait("https://wakaf.kitabina.org/lokasi", "h1, h2");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const lokasiPng = path.join(targetDir, "wakaf-kitabina-lokasi.png");
  await page.screenshot({ path: lokasiPng });
  console.log(`Saved ${lokasiPng}`);

  // 6. Scan QR Code
  await navigateAndWait("https://wakaf.kitabina.org/scan-qr", "h1, h2");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const scanPng = path.join(targetDir, "wakaf-kitabina-scan-qr.png");
  await page.screenshot({ path: scanPng });
  console.log(`Saved ${scanPng}`);

  // 7. Program Wakaf / Ingin Berwakaf
  await navigateAndWait("https://wakaf.kitabina.org/wakaf", "h1, h2");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const programPng = path.join(targetDir, "wakaf-kitabina-program.png");
  await page.screenshot({ path: programPng });
  console.log(`Saved ${programPng}`);

  // 8. Akses Internal / Login Portal
  await navigateAndWait("https://wakaf.kitabina.org/login", "form");
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  const loginPng = path.join(targetDir, "wakaf-kitabina-login.png");
  await page.screenshot({ path: loginPng });
  console.log(`Saved ${loginPng}`);

  await browser.close();
  console.log("All screenshots captured successfully!");
}

capture().catch((err) => {
  console.error("Capture failed:", err);
  process.exit(1);
});
