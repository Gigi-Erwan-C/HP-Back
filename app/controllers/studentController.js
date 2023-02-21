const dataMapper = require('../models/dataMapper');

const studentController = {
  async getAll(_, res) {
    const students = await dataMapper.getAllStudents();
    res.json(students);
  },

  async addStudent(req, res) {
    const studentInfo = req.body;
    const student = await dataMapper.addOneStudent(studentInfo);
    res.json(student);
  },
};

module.exports = studentController;
