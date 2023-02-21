const dataMapper = require('../models/dataMapper');

const pointController = {
  async getAll(_, res) {
    const result = await dataMapper.getAllPoints();
    res.json(result);
  },
};

module.exports = pointController;
