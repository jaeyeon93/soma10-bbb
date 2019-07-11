require('dotenv').config();
const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const MONGO_URI = `${process.env.DB_SCHEMA}${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;
const HOST = 'http://localhost:3000';
describe('Routing and Integration Test', () => {
  before((done) => {
    if (mongoose.connection.db) return done();
    mongoose.connect(MONGO_URI, done);
  });

  it('요청 테스트', (done) => {
    request(`${process.env.HOST}:${process.env.PORT}/users`)
      .expect(200, done);
  });
  after(() => {
    mongoose.connection.close(() => {
      console.log('Test database connection closed');
    });
  });
});
