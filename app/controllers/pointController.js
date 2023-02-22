const dataMapper = require('../models/dataMapper');

const pointController = {
  async getAll(_, res) {
    const result = await dataMapper.getAllPoints();
    res.json(result);
  },

  async add(req, res) {
    const pointInfo = req.body;
    const result = await dataMapper.addPoint(pointInfo);
    res.json(result);
  },

  async getOne(req, res) {
    const { id } = req.params;
    const onePoint = await dataMapper.getOnePoint(id);
    res.json(onePoint);
  },

  async update(req, res) {
    const { id } = req.params;
    const point = req.body;
    const updatePoint = await dataMapper.updateOnePoint({ ...point, id });
    res.json(updatePoint);
  },
};

module.exports = pointController;
