var User = require('../models/userModel');
var Q = require('q');

/* ---------------- */
/*     PROMISES     */
/* ---------------- */

var getUsers = Q.nbind(User.find, User);
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);
var updateUser = Q.nbind(User.findOneAndUpdate, User);
var removeUser = Q.nbind(User.remove, User);
var populateBoards = Q.nbind(User.populate, User);

/* ----------------------- */
/*     USER CONTROLLER     */
/* ----------------------- */

module.exports = {
  ////////////////
  // FETCH USER //
  ////////////////
  fetchOne: function (req, res, next) {
    var username = req.query.username;

    findUser({username: username})
    .then(function (user) {
      if (!user) {
        throw new Error('User: %s does not exist', username);
      } else {
        res.status(200).json(user);
      }
    })
    .fail(function (err) {
      console.error('Could not find user');
      throw new Error('Could not find user');
    });
  },

  /////////////////
  // CREATE USER //
  /////////////////
  createOne: function (req, res, next) {
    var authId = req.body.authId;
    var name = req.body.name;
    var username = req.body.username;

    findUser({authId: authId})
    .then(function (user) {
      if (user) {
        var opts = [{path: 'boards', model: 'Board'}];
        populateBoards(user, opts)
        .then(function (populatedUser) {
          if (populatedUser) {
            res.status(200).json(populatedUser);
          }
        }).fail(function (err) {
          console.error('Could not populate user boards');
          throw new Error('Could not populate user boards');
        });
      } else {
        createUser({
          authId: authId,
          name: name,
          username: username,
          boards: []
        })
        .then(function (user) {
          res.status(201).json(user);
        })
        .fail(function (err) {
          console.error('Could not create user');
          throw new Error('Could not create user');
        });
      }
    })
    .fail(function (err) {
      console.error('Could not find user');
      throw new Error('Could not find user');
    });
  },

  /////////////////
  // UPDATE USER //
  /////////////////
  updateOne: function (req, res, next) {
    var update = req.body;
    var uid = update.id;
    delete update.id;
    delete update.authId;
    delete update.boards;

    updateUser({_id: uid}, update, {new: true})
    .then(function (user) {
      if (!user) {
        console.error('User: %s does not exist', username);
        throw new Error('User: %s does not exist', username);
      } else {
        var opts = [{path: 'boards', model: 'Board'}];
        populateBoards(user, opts)
        .then(function (populatedUser) {
          if (populatedUser) {
            res.status(200).json(populatedUser);
          }
        }).fail(function (err) {
          console.error('Could not populate user boards');
          throw new Error('Could not populate user boards');
        });
      }
    })
    .fail(function (err) {
      console.error('User does not exist');
      throw new Error('User does not exist');
    });
  },

  //////////////////
  // DELETE USER //
  //////////////////
  removeOne: function (req, res, next) {
    var uid = req.body.id;

    removeUser({_id: uid})
    .then(function (status) {
      res.status(200).json(status);
    })
    .fail(function (err) {
      console.error('Could not delete user');
      throw new Error('Could not delete user');
    });
  }
};
