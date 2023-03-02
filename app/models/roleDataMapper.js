const client = require('./database');

const roleDataMapper = {
  async getAllRoles() {
    const preparedQuery = 'SELECT * FROM "role"';
    const results = await client.query(preparedQuery);
    return results.rows;
  },
};

module.exports = roleDataMapper;
