const dataMapper = require('../models/dataMapper');

const pointController = {
  async getAll(_, res) {
    const result = await dataMapper.getAllPoints();
    res.json(result);
  },

  async add(req, res) {
    const pointInfo = req.body;
    const result = await dataMapper.addPoint(pointInfo);
    res.json(result);
  },
};

module.exports = pointController;
