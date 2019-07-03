describe('Index Router 테스트하기', () => {
  before((client, done) => {
    done();
  });
  after((client, done) => {
    done();
  });
  describe('## / 경로에 대한 페이지 확인', () => {
    it('김재연 이름 확인 ', (client, done) => {
      client
        .url('http://localhost:3000')
        .waitForElementVisible('body', 3000)
        .assert.containsText('body > div.row > div:nth-child(2) > div > a:nth-child(2) > div > p', '김재연')
        .end(done);
      // body > div.row > div:nth-child(2) > div > a:nth-child(2) > div > p
    });
  });
})
