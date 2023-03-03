const client = require('./database');

const studentDataMapper = {
  async getAllStudentsWithHouseName() {
    const preparedQuery = `
      SELECT
        "student".*,
        "house"."name" AS "house_name"
      FROM "student"
      JOIN "house" ON "house_id" = "house"."id"
      ORDER BY "firstname"`;
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async getTopFiveStudents() {
    const preparedQuery = `
      SELECT * FROM "students_total_score"
      ORDER BY "total_score" DESC NULLS LAST
      LIMIT 5`;
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async getAllStudentsWithHouseAndTotalScore() {
    const preparedQuery = `
      SELECT
        "student"."id",
        "firstname",
        "lastname",
        "student"."score",
        "house"."name" AS "house_name",
      COALESCE (SUM ("point"."value") + "student"."score", "student"."score") AS "student_total_score"
      FROM "student"
      LEFT OUTER JOIN "point" ON "student"."id" = "student_id"
      JOIN "house" ON "house"."id" = "student"."house_id"
      GROUP BY
        "student"."id",
        "house"."name"
      ORDER BY "firstname";`;
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async addOneStudent(studentInfo) {
    const preparedQuery = `
      INSERT INTO "student" ("lastname", "firstname", "class_name", "score", "house_id")
      VALUES ($1, $2, $3, NULLIF($4, '')::INT, NULLIF($5, '')::INT)
      RETURNING *`;

    const values = [
      `${studentInfo.lastname}`,
      `${studentInfo.firstname}`,
      `${studentInfo.class_name}`,
      `${studentInfo.score}`,
      `${studentInfo.house_id}`,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async updateOneStudent(obj) {
    const preparedQuery = `
      UPDATE "student"
      SET
        "lastname" = $1,
        "firstname" = $2,
        "class_name" = $3,
        "score" = NULLIF($4, '')::INT,
        "house_id" = NULLIF($5, '')::INT,
        "updated_at" = now()
      WHERE "id" = $6
      RETURNING *`;

    const values = [
      obj.lastname,
      obj.firstname,
      obj.class_name,
      obj.score,
      obj.house_id,
      obj.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

  async deleteOneStudent(id) {
    const preparedQuery = `
      DELETE CASCADE FROM "student"
      WHERE "id" = $1`;

    const values = [`${id}`];

    const result = await client.query(preparedQuery, values);

    return (result.rowCount === 1);
  },

};

module.exports = studentDataMapper;
