// const houseDataMapper = require('../models/houseDataMapper');
const { houseDataMapper } = require('../models/index');

const houseController = {

  async getAllWithScore(_, res) {
    const result = await houseDataMapper.getAllHousesWithScore();
    res.json(result);
  },

  async update(req, res) {
    const { id } = req.params;
    const houseInfo = req.body;
    const result = await houseDataMapper.updateHouse({ ...houseInfo, id });
    res.json(result);
  },
};

module.exports = houseController;
