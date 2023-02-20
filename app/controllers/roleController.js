const dataMapper = require('../models/dataMapper');

const roleController = {
  async getRole(_, res) {
    const role = await dataMapper.getAllRoles();
    console.log(role);
    res.json(role);
  },
};

module.exports = roleController;
