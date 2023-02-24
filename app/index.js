require('dotenv').config();

const express = require('express');
const cors = require('cors');

const router = require('./routers/router');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

module.exports = app;
