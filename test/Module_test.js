const chai = require('chai');
const moduleSum = require('./ModuleSum');
const expect = chai.expect;

describe('#moduleSum', () => {
  it('sum()', () => {
    expect(moduleSum.sum(1, 2)).to.equal(3);
    expect(moduleSum.sum(3, 2)).to.equal(5);
    expect(moduleSum.sum(5, 0)).to.equal(5);
  });
});
