const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const url = 'http://localhost:3000/users';

describe('Request test', () => {
  it('request to server', (done) => {
    chai.request(url)
      .get('/')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        console.log('body : ', res.body);
        expect(res.body[0]).to.haveOwnProperty('id').equal('jaeyeon93');
        done();
      });
  });
});
