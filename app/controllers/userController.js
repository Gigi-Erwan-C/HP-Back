const dataMapper = require('../models/dataMapper');

const userController = {
  async getAll(_, res) {
    const users = await dataMapper.getAllUsers();
    res.json(users);
  },

  async add(req, res) {
    const userInfo = req.body;
    await dataMapper.addUser(userInfo);
    res.send('user added');
  },
};

module.exports = userController;
