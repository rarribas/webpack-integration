var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/app/index.js',

  output: {
    filename: 'exordo.bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.jst']
    // alias: {
    //   components: path.resolve(__dirname, 'public/app/components')
    // }
  },

  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore',
      JST: './templates',
      I18n: './translations'
    }),
  ]
};
