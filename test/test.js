const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('#indexOf()', () => {
  it('값이 일치하지 않을 경우 -1을 return', () => {
    expect([1, 2, 3].indexOf(5)).to.equal(-1);
    expect([1, 2, 3].indexOf(3)).to.equal(2);
    expect([1, 2, 3].indexOf(0)).to.equal(-1);
  });
});

// Async
describe('#indexOf()', () => {
  it('setTimeout', (done) => {
    setTimeout(() =>{
      expect([1, 2, 3].indexOf(5)).to.equal(-1);
      expect([1, 2, 3].indexOf(3)).to.equal(2);
      expect([1, 2, 3].indexOf(0)).to.equal(-1);
      done();
    }, 1000);
  });
});

describe('#indexOf() hooks', () => {
  let arr = [];
  beforeEach((done) => {
    setTimeout((() => {
      arr = [1, 2, 3];
      done();
      console.log('beforeEach after Done() method called');
    }), 1500);
  });
  afterEach(() => {
    console.log('afterEach method called');
    arr = [];
  });
  it('Asynchronous Hooks', () => {
    console.log('비동기 실행중');
    expect(arr.indexOf(5)).to.equal(-1);
    expect(arr.indexOf(3)).to.equal(2);
    expect(arr.indexOf(0)).to.equal(-1);
  });
});

// Chai
describe('#Expect test', () => {
  it('expect - Array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr).to.have.lengthOf(5);
    expect(arr).to.be.not.empty;
    expect(arr).to.have.ordered.members([1,2,5,3,4]);
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


// Hooks test
describe('#Hooks', () => {
  before(() => {
    console.log('before');
  });
  after(() => {
    console.log('after');
  });
  beforeEach(() => {
    console.log('before each');
  });
  afterEach(() => {
    console.log('after each');
  });
  it('#test case#1', () => {
    console.log('test case1');
  });
  it('#test case2', () => {
    console.log('test case2');
  });
})
