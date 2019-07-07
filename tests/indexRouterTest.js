// describe('Index Router 테스트하기', () => {
//   after((client, done) => {
//     done();
//   });
//   describe('## / 경로에 대한 페이지 확인', () => {
//     it('김재연 이름 확인 ', (client, done) => {
//       client
//         .url('http://localhost:3000')
//         .waitForElementVisible('body', 3000)
//         .assert.containsText('body > div.row > div:nth-child(2) > div > a:nth-child(2) > div > p', '김재연')
//         .end(done);
//       // body > div.row > div:nth-child(2) > div > a:nth-child(2) > div > p
//     });
//   });
// })

const puppeteer = require('puppeteer');
const {expect} = require('chai');

describe('index페이지 E2E테스트', () => {
  before(async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    console.log('before동작');
    console.log('browser : ',)
  });

  it('main 페에지가 띄어질 것이다.', async () => {
    await expect(browser.status(200)).equal(200);
  });
})
