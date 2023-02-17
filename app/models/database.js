const { Pool } = require('pg');

const pool = new Pool({
  database: process.env.PG_URL,
});

module.exports = pool;
