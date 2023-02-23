const client = require('./database');

const dataMapper = {
  async getAllRoles() {
    const preparedQuery = 'SELECT * FROM "role"';
    const results = await client.query(preparedQuery);
    return results.rows;
  },

  async getAllUsers() {
    const preparedQuery = 'SELECT * FROM "user"';
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

  async getAllStudents() {
    const preparedQuery = 'SELECT * FROM "student"';
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async getAllHouses() {
    const preparedQuery = 'SELECT * FROM "house"';
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async getOneHouse(id) {
    const preparedQuery = `SELECT * FROM "house" WHERE "id" = ${id}`;
    const result = await client.query(preparedQuery);
    return result.rows[0];
  },

  async updateHouse(houseInfo) {
    const preparedQuery = `
    UPDATE "house"
    SET
      "name" = $1,
      "score" = $2,
      "updated_at" = now()
    WHERE "id" = $3
    RETURNING *`;

    const values = [
      houseInfo.name,
      houseInfo.score,
      houseInfo.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async addOneStudent(studentInfo) {
    const preparedQuery = `INSERT INTO "student" ("lastname", "firstname", "class", "score", "house_id")
    VALUES ($1, $2, $3, NULLIF($4, '')::INT, NULLIF($5, '')::INT)
    RETURNING *`;

    const values = [
      `${studentInfo.lastname}`,
      `${studentInfo.firstname}`,
      `${studentInfo.class}`,
      `${studentInfo.score}`,
      `${studentInfo.house_id}`,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async getOneStudent(id) {
    const preparedQuery = `
    SELECT * FROM "student"
    WHERE "id" = $1
    `;
    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);
    return result.rows[0];
  },

  async updateOneStudent(obj) {
    const preparedQuery = `
    UPDATE "student"
    SET
    "lastname" = $1,
    "firstname" = $2,
    "class" = $3,
    "score" = NULLIF($4, '')::INT,
    "house_id" = NULLIF($5, '')::INT,
    "updated_at" = now()
    WHERE "id" = $6
    RETURNING *`;

    const values = [
      obj.lastname,
      obj.firstname,
      obj.class,
      obj.score,
      obj.house_id,
      obj.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async deleteOneStudent(id) {
    const preparedQuery = `
    DELETE FROM "student"
    WHERE "id" = $1
    `;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);

    return (result.rowCount === 1);
  },

  async getAllStudentsFromOneHouse(id) {
    const preparedQuery = `
    SELECT * FROM "student"
    WHERE "house_id" = $1`;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);
    return result.rows;
  },

  async getAllPoints() {
    const preparedQuery = 'SELECT * FROM "point"';
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async addPoint(pointInfo) {
    const preparedQuery = `
    INSERT INTO "point" ("value", "content", "user_id", "house_id", "student_id")
    VALUES ($1, $2, $3, NULLIF($4, '')::INT, NULLIF($5, '')::INT)
    RETURNING *`;

    const values = [
      pointInfo.value,
      pointInfo.content,
      pointInfo.user_id,
      pointInfo.house_id,
      pointInfo.student_id,
    ];

    const result = await client.query(preparedQuery, values);
    return result.rows[0];
  },

  async getOnePoint(id) {
    const preparedQuery = `
    SELECT * FROM "point"
    WHERE "id" = $1
    `;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async updateOnePoint(point) {
    const preparedQuery = `
    UPDATE "point"
    SET
    "value" = $1,
    "content" = $2,
    "user_id" = $3,
    "house_id" = $4,
    "student_id" = $5,
    "updated_at" = now()
    WHERE "id" = $6
    RETURNING *`;

    const values = [
      point.value,
      point.content,
      point.user_id,
      point.house_id,
      point.student_id,
      point.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async deleteOnePoint(id) {
    const preparedQuery = `
    DELETE FROM point
    WHERE "id" = $1
    `;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);

    return (result.rowCount === 1);
  },
};

module.exports = dataMapper;
