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

  async getOne(req, res) {
    const { id } = req.params;
    const user = await dataMapper.getOneUser(id);
    res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const userInfo = req.body;
    const result = await dataMapper.updateUser({ ...userInfo, id });
    res.json(result);
  },
};

module.exports = userController;
