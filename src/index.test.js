//import our assert library
import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

//Async test (DOM test + using jsdom to test dom elements) below: use 'done' below to make sure mocha knows it is done, otherwise it will always pass
// describe('index.html', function() {
//   it('should say hello', function(done) {
//     const index = fs.readFileSync('./src/index.html', "utf-8");
//     jsdom.env(index, function(err, window) {
//       const h1 = window.document.getElementsByTagName('h1')[0];
//       expect(h1.innerHTML).to.equal("Hello World!");
//       done();
//       window.close();
//     });
//   });
// });

describe('index.html', function() {
  it('should have h1 that says Users', function(done) {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  });
});

