require('dotenv').config();

const express = require('express');

// const logger = require('./app/helpers/logger');
// const router = require('./app/routers');

const port = process.env.PORT || 3000;

const app = express();

// app.use(router);

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
