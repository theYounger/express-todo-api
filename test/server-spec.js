// var test = require('tape'),
//     request = require('supertest'),
//     server = require('./../server.js'),
//     mocha = require('mocha'),
//     agent = request.agent(server),
//     expect = chai.expect,
//     bodyParser = require('body-parser');

// describe('Testing Server Routes.', function () {

//   it('Testing POST SUCCESS', function testPOST(done) {
//     agent
//     .post('/buzzword')
//     .send({buzzWord:"buzz",points:12})
//     .end(function(err, res) {
//       expect(res.body.success).to.equal(true);
//       agent
//       .get('/buzzwords')
//       .end(function (ev, rv) {
//         expect(rv.body.buzz.buzzWord).to.equal('buzz');
//         expect(rv.body.buzz.points).to.equal(12);
//         done();
//       });
//     });
//   });

//   it('Testing POST FAIL', function testPOST(done) {
//     agent
//     .post('/buzzword')
//     .send({buzzWord:false, points:100})
//     .end(function (err, res) {
//       expect(res.body.success).to.equal(false);
//       done();
//     });
//   });

//   it('Testing GET', function testGET(done) {
//     agent
//     .get('/buzzwords')
//     .end(function (err,res) {
//       expect(res.body.buzz);
//       done();
//     });
//   });

//   it('Testing PUT', function testPUT(done) {
//     agent
//     .put('/buzzword')
//     .send({buzzWord:'buzz', heard:true})
//     .end(function (err, res) {
//       expect(res.body.success).to.equal(true);
//       agent
//       .get('/buzzwords')
//       .end(function (ev,rv) {
//         expect(rv.body.buzz.heard);
//         expect(rv.body.buzz.heard).to.equal(true);
//         done();
//       });
//     });
//   });

//   it('Testing DELETE', function testDELETE(done) {
//     agent
//     .delete('/buzzword')
//     .send({'buzzWord':'test'})
//     .end(function (err,res) {
//       expect(res.body.success).to.equal(false);
//       agent
//       .delete('/buzzword')
//       .send({buzzWord:'buzz'})
//       .end(function (ev, rv) {
//         expect(rv.body.success).to.equal(true);
//         agent
//         .get('/buzzwords')
//         .end(function (evv, rvv) {
//           expect(rvv.body).to.be.empty;
//           done();
//         });
//       });
//     });
//   });

//   it('Testing RESET false', function testRESET(done) {
//     agent
//     .post('/buzzword')
//     .send({"buzzWord":"buzz", "points":12})
//     .end(function (err, res) {
//       expect(res.body.success).to.equal(true);
//       agent
//       .post('/reset')
//       .send({"reset":false})
//       .end(function (ev,rv) {
//         expect(rv.body.success).to.equal(false);
//         agent
//         .get('/buzzwords')
//         .end(function (evv,rvv) {
//           expect(rvv.body.buzz).to.be.ok;
//           done();
//         });
//       });
//     });
//   });
//   it('Testing RESET true', function testRESET(done) {
//     agent
//     .post('/buzzword')
//     .send({"buzzWord":"word", "points":6})
//     .end(function (err, res) {
//       expect(res.body.success).to.equal(true);
//       agent
//       .post('/reset')
//       .send({"reset":true})
//       .end(function (ev,rv) {
//         expect(rv.body.success).to.equal(true);
//         agent
//         .get('/buzzwords')
//         .end(function (evv,rvv) {
//           expect(rvv.body).to.be.empty;
//           done();
//         });
//       });
//     });
//   });
// });