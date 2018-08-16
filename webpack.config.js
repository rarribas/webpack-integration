var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    index: './public/javascripts/index.js',
    index_two: './public/javascripts/index_2.js',
  },

  // devtool: 'inline-source-map',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
};
