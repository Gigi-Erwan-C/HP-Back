const dataMapper = require('../models/dataMapper');

const studentController = {
  async getAll(_, res) {
    const students = await dataMapper.getAllStudents();
    res.json(students);
  },
};

module.exports = studentController;
