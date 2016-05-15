const express = require('express');
const createServer = require('./server');

const app = express();
const port = process.env.PORT || 3000;

createServer(app, port);
