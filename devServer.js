const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const createServer = require('./server')

const app = express();
const port = process.env.PORT || 3000;

const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

createServer(app, port);
