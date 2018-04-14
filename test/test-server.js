
'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server.js');

const expect = chai.expect;

chai.use(chaiHttp);

describe('index page', function () {
  it('should exist', function () {
    return chai.request(app)
      .get('/')
      .then(function (res) {
        expect(res).to.have.status(200);
      });
  });
});

describe('activity page', function () {
  it('should exist', function () {
    return chai.request(app)
      .get('/activity')
      .then(function (res) {
        expect(res).to.have.status(200);
      });
  });
});
describe('about us page', function () {
  it('should exist', function () {
    return chai.request(app)
      .get('/about')
      .then(function (res) {
        expect(res).to.have.status(200);
      });
  });
});
describe('login page', function () {
  it('should exist', function () {
    return chai.request(app)
      .get('/login')
      .then(function (res) {
        expect(res).to.have.status(200);
      });
  });
});