const assert = require('assert');

describe('#Hello World!', () => {
  it('입력 값은 Hello World!', () => {
    const input = 'Hello World!';
    // 입력값이라고 가정
    assert.equal('Hello World!', input);
  });
  describe('#String test', () => {
    it('Hello의 문자 개수는 5', () => {
      const str = 'Hello';
      if (str.length === 5) {
        assert.ok(true);
      } else {
        assert.ok(false);
      }
    });
    it('World는 W 대문자', () => {
      const str = 'World';
      if (str.indexOf('w') > -1) {
        assert.ok(true);
      } else {
        assert.ok(false);
      };
    });
  });
});