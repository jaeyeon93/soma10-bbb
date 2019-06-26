const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('#Expect test', () => {
  it('expect - Array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).to.have.lengthOf(5);
    expect(arr).to.be.not.empty;
    expect(arr).to.have.ordered.members([1, 2, 5, 3, 4]);
  });

  it('expect - String', () => {
    const str = 'Awesome!!';
    expect(str).to.be.a('String');
    expect(str).to.equal('Awesome!!');
    expect(str).to.have.lengthOf(7, 'Why fail?');
  });
});

describe('#Assert Test', () => {
  it('assert - Array', () => {
    const str = 'Awesome!!';
    const obj = {
      assertion: ['assert', 'expect', 'should'],
      framework: 'mocha',
    };
    assert.equal(str, 'Awesome!!');
    assert.typeOf(str, 'String');
    assert.lengthOf(obj.assertion, 3); // assertion value length
  });
});
