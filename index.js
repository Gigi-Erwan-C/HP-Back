require('dotenv').config();

// Require app file
const app = require('./app');

// const logger = require('./app/helpers/logger');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready: http://localhost:${port}`);
});
