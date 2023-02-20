const client = require('./database');

const dataMapper = {
  getAllRoles() {
    const preparedQuery = 'SELECT * FROM "role"';
    const results = client.query(preparedQuery);
    return results.rows;
  },
};

module.exports = dataMapper;
