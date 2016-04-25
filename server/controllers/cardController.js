var Card = require('../models/cardModel');
var Board = require('../models/boardModel');

var Q = require('q');

/* ---------------- */
/*     PROMISES     */
/* ---------------- */

var getCards = Q.nbind(Card.find, Card);
var findCard = Q.nbind(Card.findOne, Card);
var createCard = Q.nbind(Card.create, Card);
var updateCard = Q.nbind(Card.findOneAndUpdate, Card);
var removeCard = Q.nbind(Card.remove, Card);
var populateVenues = Q.nbind(Card.populate, Card);

var updateBoard = Q.nbind(Board.findOneAndUpdate, Board);

/* ----------------------- */
/*     CARD CONTROLLER     */
/* ----------------------- */

module.exports = {
  ////////////////
  // FETCH CARD //
  ////////////////
  fetchOne: function (req, res, next) {
    var title = req.body.title;
    var board = req.body.board;
    var boardId = board._id;
    var cards = board.cards;

    var opts = [{path: 'cards', model: 'Card'}];
    findCard(board, opts)
    .then(function (populatedBoard) {
      if (populatedBoard) {
        res.status(200).json(populatedBoard);
      }
    })
    .fail(function (err) {
      console.error('Could not populate boards');
      throw new Error('Could not populate boards');
    });
  },

  /////////////////
  // CREATE CARD //
  /////////////////
  createOne: function (req, res, next) {
    var cardTitle = req.body.title;
    var cardDescription = req.body.description;
    var cardVenue = req.body.venueId;
    var cardStartTime = req.body.startTime;
    var cardImage = req.body.cardImage;
    var cards = board.cards;
    var currentCard = cards[0];

    // see if the card already exists
    findCard({cardId: currentCard}) // change title to permalink
    .then(function (card) {
      if (card) {
        console.error('Card already exists');
        throw new Error('Card already exists');
      }
      // otherwise create a new card
      createCard({ // might need return statement
        userTitle: cardTitle,
        description: cardDescription,
        venueId: cardVenue,
        createdAt: new Date,
        startTime: null
      })
      .then(function (card) {
        updateCard({cardId: currentCard}, // might need return statement
          {$push: {cards: cardId}},
          {new: true}) // returns updated document
          .then(function (card) {
            var opts = [{path: 'cards', model: 'Card'}];
            populateVenues(card, opts)
            .then(function (populatedCard) {
              if (populatedCard) {
                res.status(200).json(populatedCard);
              }
            })
            .fail(function (err) {
              console.error('Could not populate card');
              throw new Error('Could not populate card');
            });
          })
          .fail(function (err) {
            console.error('Could not update card', err);
            throw new Error('Could not update card', err);
          });
        })
        .fail(function (err) {
          console.error('Could not create new card', err);
          throw new Error('Could not create new card', err);
        });
      })
      .fail(function (err) {
        console.error('Could not find card', err);
        throw new Error('Could not find card', err);
      });
    },

    /////////////////
    // UPDATE CARD //
    /////////////////
    updateOne: function (req, res, next) {
      var update = req.body;
      var uid = update.id;
      delete update.id;
      delete update.createdAt;

      // allows update of card name, desc, venue
      updateCard({_id: uid}, update, {new: true})
      .then(function (card) {
        if (!card) {
          throw new Error('Card: %s does not exist', card);
        } else {
          res.status(201).json(card);
        }
      }).fail(function (err) {
        console.log('Card does not exist');
        throw new Error('Card does not exist');
      }); 
    },

    /////////////////
    // REMOVE CARD //
    /////////////////
    removeOne: function (req, res, next) {
      var uid = req.body.id;

      removeCard({_id: uid})
      .then(function (status) {
        res.status(201).json(status);
      })
      .fail(function (err) {
        console.error('Could not delete card');
        throw new Error('Could not delete card');
      });
    }
  };
