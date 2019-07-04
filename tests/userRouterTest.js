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
        const users = res.body;
        expect(users[0]).to.haveOwnProperty('id').equal('jaeyeon93');
        expect(users[1]).to.haveOwnProperty('id').equal('tjddus1109');
        expect(users[2]).to.haveOwnProperty('id').equal('parkyounghwan');
        done();
      });
  });

  it('유저 개인에 대한 테스트', (done) => {
    chai.request(url)
      .get('/')
      .end((err, res) => {
        console.log(res.body);
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        const jaeyeon = res.body[0];
        expect(jaeyeon).to.haveOwnProperty('id').equal('jaeyeon93');
        expect(jaeyeon).to.haveOwnProperty('username').equal('김재연');
        expect(jaeyeon).to.haveOwnProperty('password').equal('1234');
        done();
      });
  });
});
