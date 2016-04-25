var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/client/components/App.jsx')
  ],
  resolve: {
    root: path.resolve('/public'),
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '/public'),
    publicPath: '/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/components'),
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
