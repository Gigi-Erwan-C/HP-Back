// const studentDataMapper = require('../models/studentDataMapper');
const { studentDataMapper } = require('../models/index');

const studentController = {

  async getAllWithHouseName(_, res) {
    const students = await studentDataMapper.getAllStudentsWithHouseName();
    res.json(students);
  },

  async getTopFive(_, res) {
    const topFiveStudents = await studentDataMapper.getTopFiveStudents();
    res.json(topFiveStudents);
  },

  async getAllWithHouseAndTotalScore(_, res) {
    const students = await studentDataMapper.getAllStudentsWithHouseAndTotalScore();
    res.json(students);
  },

  async addStudent(req, res) {
    const studentInfo = req.body;
    const student = await studentDataMapper.addOneStudent(studentInfo);
    res.json(student);
  },

  async update(req, res) {
    const { id } = req.params;
    const student = req.body;
    const updateStudent = await studentDataMapper.updateOneStudent({ id, ...student });
    res.json(updateStudent);
  },

  async delete(req, res) {
    const { id } = req.params;
    await studentDataMapper.deleteOneStudent(id);
    res.json({ message: 'Elève supprimé' });
  },

};

module.exports = studentController;
