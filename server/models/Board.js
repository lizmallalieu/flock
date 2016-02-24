var mongoose = require('mongoose');
var User = require('./User');
var Card = require('./Card');
var ObjectId = mongoose.Schema.Types.ObjectId;

var boardSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  userId: {type: String, ref: User},
  cards: [{type: ObjectId, ref: Card}]
});

module.exports = mongoose.model('Board', boardSchema);
