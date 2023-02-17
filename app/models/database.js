const { Pool } = require('pg');

const pool = new Pool({
  database: process.env.PGDATABASE,
});

module.exports = pool;
