var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Board = require('./boardModel');

var userSchema = new mongoose.Schema({
  authId: String,
  name: String,
  username: {type: String, required: true, unique: true},
  avatar: String,
  boards: [{type: ObjectId, ref: Board}]
});

module.exports = mongoose.model('User', userSchema);
