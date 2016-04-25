var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var User = require('./userModel');
var Card = require('./cardModel');
var Venue = require('./venueModel');

var boardSchema = new mongoose.Schema({
  title: String,
  headerImage: String,
  description: String,
  image: String,
  category: String,
  permalink: {type: String, required: true, unique: true},
  userId: {type: String, ref: User},
  cards: [{type: ObjectId, ref: Card}]
});

module.exports = mongoose.model('Board', boardSchema);
