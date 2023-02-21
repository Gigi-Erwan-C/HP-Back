const dataMapper = require('../models/dataMapper');

const houseController = {
  async getOne(req, res) {
    const { id } = req.params;
    const user = await dataMapper.getOneHouse(id);
    res.json(user);
  },
};

module.exports = houseController;
