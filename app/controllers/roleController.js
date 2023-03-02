// const roleDataMapper = require('../models/roleDataMapper');
const { roleDataMapper } = require('../models/index');

const roleController = {
  async getRole(_, res) {
    const role = await roleDataMapper.getAllRoles();
    res.json(role);
  },
};

module.exports = roleController;
