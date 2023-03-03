const client = require('./database');

const houseDataMapper = {

  async getAllHousesWithScore() {
    const preparedQuery = 'SELECT * FROM "houses_total_score"';
    const result = await client.query(preparedQuery);
    return result.rows;
  },

  async updateHouse(houseInfo) {
    const preparedQuery = `
      UPDATE "house"
      SET
        "name" = $1,
        "score" = $2,
        "name_in_english" = $3,
        "updated_at" = now()
      WHERE "id" = $4
      RETURNING *`;

    const values = [
      houseInfo.name,
      houseInfo.score,
      houseInfo.name_in_english,
      houseInfo.id,
    ];

    const result = await client.query(preparedQuery, values);

    return result.rows[0];
  },

};

module.exports = houseDataMapper;
