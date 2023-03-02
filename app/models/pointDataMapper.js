const client = require('./database');

const pointDataMapper = {
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

  async removePoint(pointInfo) {
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

module.exports = pointDataMapper;
