const chai = require('chai');
const expect = chai.expect;
const puppeteer = require('puppeteer');

describe('sample test', () => {
  let page;
  let browser;

  before(async () => {
    browser = await puppeteer.launch({
      headless: false,
      devtools: true,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });

  after(async () => {
    await page.close();
  })

  it('should have the correct page title', async () => {
    expect(await page.title()).to.eql('TODO LIST');
  });

  it('정성연이 index에 있는지', async () => {
    let name = await page.evaluate(() => document.querySelector('body > div.row > div:nth-child(2) > div > a:nth-child(2) > div > p').textContent);
    expect(name.trim()).is.equal('김재연');
  });

  it('로그인 하기', () => {
    page.click('body > div.row > div:nth-child(2) > div > a:nth-child(2) > div');
    page.type('#loginPassword', '1234'); // 패스워드 입력
    console.log('password 입력');
    page.waitFor('#loginModal > div.modal-dialog > div > div.modal-footer > button.btn.btn-success').press('Login');
  });
});
