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
};

module.exports = houseController;
