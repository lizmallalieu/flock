var express = require('express');
var mongoose = require('mongoose');
var Q = require('q');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

/* ---------------- */
/*     DATABASE     */
/* ---------------- */

mongoose.connect('mongodb://localhost/flock');
var db = mongoose.connection;

db.on('error', function() {
  console.error.bind(console, 'Connection Error:');
});

db.once('open', function() {
  console.log('MongoDB is open');
});

//* ------------------------- */
/*     MIDDLEWARE & ROUTES    */
/* -------------------------- */

var app = express();
require('./config/middleware')(app, express);
require('./config/router')(app, express);

/* --------------- */
/*     SERVERS     */
/* --------------- */

app.listen(3000);
new WebpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  }
}).listen(3001, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Flock - Webpack 🐦  is listening on 3000 and 3001 and 8080 too');
});
