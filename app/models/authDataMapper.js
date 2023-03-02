const client = require('./database');

const authDataMapper = {
  async getOneUserByEmail(email) {
    const preparedQuery = 'SELECT * FROM "user" WHERE "email" = $1';

    const values = [email];

    const result = await client.query(preparedQuery, values);
    return result.rows[0];
  },
};

module.exports = authDataMapper;
