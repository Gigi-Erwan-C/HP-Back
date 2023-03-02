const client = require('./database');

const userDataMapper = {
  async getAllUsers() {
    const preparedQuery = 'SELECT * FROM "user" ORDER BY "firstname"';
    const results = await client.query(preparedQuery);
    return results.rows;
  },

  async addUser(userInfo) {
    const preparedQuery = `
    INSERT INTO "user" ("lastname", "firstname", "email", "password", "role_id")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`;

    const values = [
      `${userInfo.lastname}`,
      `${userInfo.firstname}`,
      `${userInfo.email}`,
      `${userInfo.password}`,
      `${userInfo.role_id}`,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async getOneUser(id) {
    const preparedQuery = `SELECT * FROM "user" WHERE "id" = ${id}`;
    const result = await client.query(preparedQuery);
    return result.rows[0];
  },

  async updateUser(userInfo) {
    const preparedQuery = `
    UPDATE "user"
    SET
      "lastname" = $1,
      "firstname" = $2,
      "email" = $3,
      "password" = $4,
      "role_id" = $5,
      "updated_at" = now()
    WHERE "id" = $6
    RETURNING *`;

    const values = [
      `${userInfo.lastname}`,
      `${userInfo.firstname}`,
      `${userInfo.email}`,
      `${userInfo.password}`,
      `${userInfo.role_id}`,
      `${userInfo.id}`,
    ];

    const result = await client.query(preparedQuery, values);
    return result.rows[0];
  },

  async deleteUser(id) {
    const preparedQuery = `
    DELETE FROM "user"
    WHERE "id" = $1`;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);

    return (result.rowCount === 1);
  },

  async checkUserInfo(userInfo) {
    const preparedQuery = `
    SELECT * FROM "user"
    WHERE "email" = $1
    AND "password" = $2`;

    const values = [
      `${userInfo.email}`,
      `${userInfo.password}`,
    ];

    const result = await client.query(preparedQuery, values);
    return result.rows[0];
  },

  async updatePasswordByUser(obj) {
    const preparedQuery = `UPDATE "user" SET "password" = $1
   WHERE "id" = $2
   RETURNING *`;

    const values = [
      obj.password,
      obj.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },
};

module.exports = userDataMapper;
