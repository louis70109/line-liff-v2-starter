const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('liff id');

  await page.waitForNavigation();
  await page.click('#liffLoginButton');
  await page.waitForNavigation();

  const account = await page.$('input[name="tid"]');
  account.type('account');
  await new Promise((r) => setTimeout(r, 1000));

  const passwd = await page.$('input[name="tpasswd"]');
  await passwd.type('pwd');
  await new Promise((r) => setTimeout(r, 1000));

  await page.click('button[type="submit"]');
  await new Promise((r) => setTimeout(r, 2000));

  await page.click('#shareTargetPicker');
  await new Promise((r) => setTimeout(r, 1500));

  // share target picker page
  let pages = await browser.pages();
  await new Promise((r) => setTimeout(r, 2000));

  await pages[2].type('.c-textinput__input', '測試用');
  await new Promise((r) => setTimeout(r, 5000));
  await pages[2].click('input[type="checkbox"]');
  await new Promise((r) => setTimeout(r, 2000));
  await pages[2].click('button[type="button"]');
})();
