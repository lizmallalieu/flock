var path = require('path');

var User = require('../controllers/userController');
var Board = require('../controllers/boardController');
var Card = require('../controllers/cardController');
var Venue = require('../controllers/venueController');

module.exports = function (app, express) {
  app.get('/api/users', User.fetchOne);
  app.post('/api/users', User.createOne);
  app.put('/api/users', User.updateOne);
  app.delete('/api/users', User.removeOne);

  app.get('/api/boards', Board.fetchOne);
  app.post('/api/boards', Board.createOne);
  app.put('/api/boards', Board.updateOne);
  app.delete('/api/boards', Board.removeOne);

  app.get('/api/cards', Card.fetchOne);
  app.post('/api/cards', Card.createOne);
  app.put('/api/cards', Card.updateOne);
  app.delete('/api/cards', Card.removeOne);

  app.get('/api/venues', Venue.fetchOne);
  app.put('/api/venues', Venue.updateOne);
  app.delete('/api/venues', Venue.removeOne);

  app.get('/*/*', function(req, res) {
    res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
  });

  app.get('/*', function(req, res) {
    res.status(200).sendFile(path.resolve(__dirname, '../../public/index.html'));
  });
};
