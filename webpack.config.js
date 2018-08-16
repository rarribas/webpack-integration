var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'public/'),
  entry: './javascripts/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist')
  },
};
