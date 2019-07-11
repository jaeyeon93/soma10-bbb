const request = require('supertest');
const app = require('../app');
const agent = request.agent(app);
const expect = require('chai').expect;

before(() => {
  app.on('appStarted', () => {

  });
});

describe('app.emit사용', () => {
  it('테스트 1', (done) => {
    agent
      .get('/users')
      .expect(200, done);
  });

  it('request to server', (done) => {
    agent
      .get('/users')
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
})
