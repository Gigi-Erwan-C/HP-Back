const dataMapper = require('../models/dataMapper');

const userController = {
  async getAll(_, res) {
    const users = await dataMapper.getAllUsers();
    res.json(users);
  },
};

module.exports = userController;
