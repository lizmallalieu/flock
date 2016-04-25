var Board = require('../models/boardModel');
var User = require('../models/userModel');
var Q = require('q');

/* ---------------- */
/*     PROMISES     */
/* ---------------- */

var getBoards = Q.nbind(Board.find, Board);
var findBoard = Q.nbind(Board.findOne, Board);
var createBoard = Q.nbind(Board.create, Board);
var updateBoard = Q.nbind(Board.update, Board);
var removeBoard = Q.nbind(Board.remove, Board);
var populateCards = Q.nbind(Board.populate, Board);

var updateUser = Q.nbind(User.findOneAndUpdate, User);
var populateUser = Q.nbind(User.populate, User);

/* ------------------------ */
/*     BOARD CONTROLLER     */
/* ------------------------ */

module.exports = {
  /////////////////
  // FETCH BOARD //
  /////////////////

  fetchOne: function (req, res, next) {
    var permalink = req.query.permalink;
    var userId = req.query.uid;

    findBoard({permalink: permalink, userId: userId})
    .then(function (board) {
      if (!board) {
        console.error('Board: %s does not exist', permalink);
        res.status(204).json({status: 'Permalink "' + permalink + '" does not exist'});
      } else {
        res.status(200).json(board);
      }
    }).fail(function (err) {
      console.error('Could not retrieve board', err);
      res.status(404).json(err);
    });
  },

  //////////////////
  // CREATE BOARD //
  //////////////////

  createOne: function (req, res, next) {
    var title = req.body.title;
    var desc = req.body.desc;
    var img = req.body.img;
    var category = req.body.category;
    var permalink = req.body.permalink;
    var uid = req.body.uid;

    findBoard({permalink: permalink, userId: uid})
    .then(function (board) {
      if (board) {
        console.error('Board "%s" already exists with the permalink "%s"', board.title, board.permalink);
        res.status(409).send(null);
      }
      createBoard({
        title: title,
        description: desc,
        headerImage: img,
        category: category,
        permalink: permalink,
        userId: uid,
        cards: []
      })
      .then(function (board) {
        updateUser({_id: board.userId},
          {$push: {boards: board._id}},
          {new: true})
          .then(function (user) {
            var opts = [{path: 'boards', model: 'Board'}];
            populateCards(user, opts)
            .then(function (populatedBoard) {
              if (populatedBoard) {
                res.status(200).json(populatedBoard);
              }
            })
            .fail(function (err) {
              console.error('Could not populate user boards');
              throw new Error('Could not populate user boards');
            });
          })
          .fail(function (err) {
            console.error('Could not update user boards', err);
            throw new Error('Could not update user boards', err);
          });
        })
        .fail(function (err) {
          console.error('Could not create new board', err);
          throw new Error('Could not create new board', err);
        });
      })
      .fail(function (err) {
        console.error('Could not find board', err);
        throw new Error('Could not find board', err);
      });
    },

    /////////////////
    // UPDATE BOARD //
    /////////////////
    updateOne: function (req, res, next) {},

    //////////////////
    // REMOVE BOARD //
    //////////////////
    removeOne: function (req, res, next) {}
  };
