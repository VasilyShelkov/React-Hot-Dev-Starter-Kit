const webpack = require('webpack');
const extend = require('extend');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = extend(true, {}, config, {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        screw_ie8: true,

          // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
        warnings: false,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('app.css')
  ]
});
