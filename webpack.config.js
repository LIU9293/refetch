const webpack = require('webpack');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, '/test/index.js')
  ],
  output: {
    path: __dirname + '/test/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};