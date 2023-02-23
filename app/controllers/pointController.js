const dataMapper = require('../models/dataMapper');

const pointController = {
  async getAll(_, res) {
    const result = await dataMapper.getAllPoints();
    res.json(result);
  },

  // eslint-disable-next-line consistent-return
  async add(req, res) {
    try {
      const pointInfo = req.body;

      if ((!pointInfo.house_id && !pointInfo.student_id)
      || (pointInfo.house_id && pointInfo.student_id)) {
        return res.status(400).json({ error: 'Données incorrectes, merci de rééssayer' });
      }

      const result = await dataMapper.addPoint(pointInfo);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Requête invalide' });
    }
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

  async delete(req, res) {
    const { id } = req.params;
    await dataMapper.deleteOnePoint(id);
    res.send('Your point(s) have been deleted');
  },
};

module.exports = pointController;
