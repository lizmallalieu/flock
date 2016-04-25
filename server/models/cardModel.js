var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Venue = require('./venueModel');

var cardSchema = new mongoose.Schema({
  title: String,
  description: String,
  venueId: Number,
  createdAt: Date,
  startTime: Date,
  venues: [{type: ObjectId, ref: Venue}]
});

module.exports = mongoose.model('Card', cardSchema);
