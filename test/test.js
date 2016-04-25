var request = require('request');
var expect = require('chai').expect;

describe('server', function() {
  it('should respond to GET requests for the homepage with a 200 status code', function(done) {
    request('http://localhost:3001/#/*', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond to GET requests for the users page with a 200 status code', function(done) {
    request('http://localhost:3001/#/api/users', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should send back an object', function(done) {
    request('http://localhost:3001/#/api/users', function(error, response, body) {
      // parsedBody = JSON.parse(response);
      expect(response).to.be.an('object');
      done();
    });
  });

  it('should accept POST requests to Boards', function(done) {
  var requestParams = {method: 'POST',
      uri: 'http://localhost:3001/api/boards',
    json: {
      title: 'The test',
      desc: 'testing now',
      uid: '10154055994639363' }
  };
  //The place gets posted. But how can we check? How do we do a GET request with params?
  //How do we then clear the database to be used again later?

    request(requestParams, function(error, response, body) {
      expect(response.statusCode).to.equal(201);
      done();
      });


  });


  it('should respond to GET requests for boards with a 200 status code', function(done) {
  request('http://localhost:3001/api/boards', function(error, response, body) {
    expect(response.statusCode).to.equal(200);
    done();
  });
});

// app.get('http://localhost:3001/api/boards', function(req, res) {
//   res.json({
//     count: count,
//     message: 'oh boy, ' + count + ' pickles!'
//   });
// });

  //Implement a test that does a post and then a get to see if it already exists
  //Does it need to be saved in headers, not body?
  //Use robomongo to see if a post request made a board
  //Figure out how to then GET that board. Is the GET request messed up?


});
