const express = require('express');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.dev');
const createServer = require('./server')

const port = process.env.PORT || 3000;

const app = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
});

createServer(app, port);
