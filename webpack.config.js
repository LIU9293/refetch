var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'whatwg-fetch',
    path.resolve(__dirname, 'test/index.js')
  ],
  output: {
    path: __dirname + '/test/build',
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
