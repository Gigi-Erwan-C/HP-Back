const dataMapper = require('../models/dataMapper');

const roleController = {
  getRole(_, res) {
    const role = dataMapper.getAllRoles();
    res.json(role);
  },
};

module.exports = roleController;
