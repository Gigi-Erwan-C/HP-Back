const dataMapper = require('../models/dataMapper');

const houseController = {
  async getOne(req, res) {
    const { id } = req.params;
    const user = await dataMapper.getOneHouse(id);
    res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const houseInfo = req.body;
    const result = await dataMapper.updateHouse({ ...houseInfo, id });
    res.json(result);
  },

  async getAll(_, res) {
    const result = await dataMapper.getAllHouses();
    res.json(result);
  },

  async getAllWithScore(_, res) {
    const result = await dataMapper.getAllHousesWithScore();
    res.json(result);
  },

  async getAllStudentsFromOneHouse(req, res) {
    const { id } = req.params;
    const result = await dataMapper.getAllStudentsFromOneHouse(id);
    res.json(result);
  },
};

module.exports = houseController;
