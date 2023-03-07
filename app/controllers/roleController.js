// const roleDataMapper = require('../models/roleDataMapper');
const { roleDataMapper } = require('../models/index');

const roleController = {
  async getRole(_, res) {
    const role = await roleDataMapper.getAllRoles();
    res.json(role);
  },

  async getTest(_,res) {
    const y = x + 7
    res.json (y);
  }
};

module.exports = roleController;
