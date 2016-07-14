'use strict';

const superTest = require('supertest');
const app = require('../server.js');
const model = require('../model/buzzwordMem');
const chai = require('chai');


describe('GET /buzzwords', function() {

  it('should return status code 200', function(done) {
    superTest(app)
      .get('/buzzwords')
      .expect(200, done);
  });
  it('should return status code 404', function(done) {
    superTest(app)
      .get('/zubbwarts')
      .expect(404, done);
  });
});

describe('POST /reset', function() {

  it('should return status code 200', function(done) {
    superTest(app)
      .post('/reset')
      .expect(200, done);
  });
  it('should return status code 404', function(done) {
    superTest(app)
      .post('/rebet')
      .expect(404, done);
  });
  it('should set the score to 0, reset the memory', function(done) {
    superTest(app)
      .post('/reset')
      .expect(model.getScore() === 0, done);
  });
});

describe('POST /buzzword', function() {

  it('should return status code 200', function(done) {
    superTest(app)
      .post('/buzzword')
      .expect(200, done);
  });
  it('should return status code 404', function(done) {
    superTest(app)
      .post('/drubzwrt')
      .expect(404, done);
  });
});

describe('PUT /buzzword', function() {

  it('should return status code 200', function(done) {
    superTest(app)
      .post('/buzzword')
      .expect(200, done);
  });
  it('should return status code 404', function(done) {
    superTest(app)
      .post('/drowzzub')
      .expect(404, done);
  });
});

describe('DELETE /buzzword', function(done) {

  it('should return status code 200', function(done) {
    superTest(app)
      .post('/buzzword')
      .expect(200, done);
  });
  it('should return status code 404', function(done) {
    superTest(app)
      .post('/browbuzz')
      .expect(404, done);
  });
});
