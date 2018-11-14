const assert = require("assert");
const puppeteer = require("puppeteer");

const PORT = process.env.PORT || 8080;

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "google-chrome-stable",
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();

  try {
    await page.goto(`http://127.0.0.1:${PORT}`);
    assert.ok(1);
    await browser.close();
  } catch(e) {
    await browser.close();
    assert.fail(e);
  }
})();
