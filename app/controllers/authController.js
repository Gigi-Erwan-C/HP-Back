const jwt = require('jsonwebtoken');
const dataMapper = require('../models/dataMapper');

const authController = {
  // eslint-disable-next-line consistent-return
  async login(req, res) {
    const userInfo = req.body;
    const result = await dataMapper.checkUserInfo(userInfo);
    if (!result) {
      return res.status(401).json({ message: 'E-mail ou mot de passe incorrect' });
    }
    // eslint-disable-next-line max-len
    result.token = jwt.sign(result, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ result });
  },
};

module.exports = authController;
