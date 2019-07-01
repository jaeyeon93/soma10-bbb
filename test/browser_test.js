const expect = chai.expect;

describe('#Array', () => {
  let arr;
  beforeEach(() => {
    console.log('beforeEach 실행');
    arr = [1, 2, 3, 4];
  });
  afterEach(() => {
    console.log('afterEach 실행');
    arr = [];
  });
  it('array test', () => {
    expect(arr).to.be.an.instanceOf(Array);
    expect(arr).to.be.an('array').that.is.not.empty;
    expect(arr).to.be.that.include(2);
    expect(arr).to.have.lengthOf(4);
  });
  it('array compare', () => {
    expect(arr).to.eql([1, 2, 3, 4]);
  });
  it('array member', (done) => {
    setTimeout(() => {
      expect(arr).to.have.members([4, 3, 2, 1]);
      done();
    }, 1000);
  });
});
