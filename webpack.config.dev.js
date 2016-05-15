const webpack = require('webpack');
const extend = require('extend');
const config = require('./webpack.config');

module.exports = extend(true, {}, config, {
  devtool: 'eval',
  debug: true,
  entry: [
    'eventsource-polyfill', //necessary evil for hot loading with IE
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
