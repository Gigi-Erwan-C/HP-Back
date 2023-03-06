require('dotenv').config();

const express = require('express');
const cors = require('cors');

const router = require('./routers/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(router);

module.exports = app;
