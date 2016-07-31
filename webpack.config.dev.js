const webpack = require('webpack');
const extend = require('extend');
const config = require('./webpack.config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = extend(true, {}, config, {
  devtool: 'cheap-module-source-map',
  entry: [
    'eventsource-polyfill', //necessary evil for hot loading with IE
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('app.css')
  ]
});
