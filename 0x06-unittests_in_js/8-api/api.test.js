const chai = require('chai');
const request = require('request');

describe('Testing index page', () => {
  const url = 'http://localhost:7865';
  it('Checks and test the main page status code', () => {
    request(url, (err, res, body) => {
      chai.expect(res.statusCode).to.equal(200);
    })
  })
  it('Checks the main page content', () => {
    request(url, (err, res, body) => {
      chai.expect(body).to.equal('Welcome to the payment system');
    })
  })
})
