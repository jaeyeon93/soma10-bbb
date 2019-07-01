const chai = require('chai');
// const expect = chai.use(expect);
const expect = chai.expect;
const Validate = require('./validate');

suite('#Validation Check', () => {
  test('이메일 형식을 검증한다.', () => {
    let validate = new Validate();
    let result = validate.email('test@naver.com');
    expect(result).to.be.true;
  });
})
