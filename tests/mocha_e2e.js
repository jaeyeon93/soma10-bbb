const nightwatch = require('nightwatch');

describe('Google main page', () => {
  before((client, done) => {
    done();
  });
  after((client, done) => {
    done();
  });
  describe('##사용자는 검색할 수 있다.', () => {
    it('사용자는 검색어를 입력 후 자동 자동 완성된 리스트를 볼 수 있다.', (client, done) => {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'nightwatch')
        .pause(1000)
        .assert.containsText('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input', 'nightwatch')
        .end(done);
    });
  });
});
