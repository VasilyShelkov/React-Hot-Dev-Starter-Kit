const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'hotReload'),
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/',
  },
  context: resolve(__dirname, '../src'),
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: resolve(__dirname),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      include: [resolve(__dirname, '../src'), resolve(__dirname)],
      use: 'babel-loader',
    }, {
      test: /\.(css|scss)$/,
      include: [resolve(__dirname, '../src')],
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!sass-loader?sourceMap'
      })
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: '../public/index.html',
    }),
    new ExtractTextPlugin('index.css')
  ],
};
