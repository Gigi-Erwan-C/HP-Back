// const houseDataMapper = require('../models/houseDataMapper');
const { houseDataMapper } = require('../models/index');

const houseController = {
  async getOne(req, res) {
    const { id } = req.params;
    const user = await houseDataMapper.getOneHouse(id);
    res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const houseInfo = req.body;
    const result = await houseDataMapper.updateHouse({ ...houseInfo, id });
    res.json(result);
  },

  async getAll(_, res) {
    const result = await houseDataMapper.getAllHouses();
    res.json(result);
  },

  async getAllHousesWithScore(_, res) {
    const result = await houseDataMapper.getAllHousesWithScore();
    res.json(result);
  },

  async getAllStudentsFromOneHouse(req, res) {
    const { id } = req.params;
    const result = await houseDataMapper.getAllStudentsFromOneHouse(id);
    res.json(result);
  },
};

module.exports = houseController;
