const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dataMapper = require('../models/dataMapper');

const authController = {
  // eslint-disable-next-line consistent-return
  async login(req, res) {
    const { email, password } = req.body;
    console.log(email);
    const result = await dataMapper.getOneUserByEmail(email);
    console.log(result);
    if (!result) {
      return res.status(401).json({ message: 'EE-mail ou mot de passe incorrect' });
    }
    const isMatchingPassword = await bcrypt.compare(password, result.password);

    if (!isMatchingPassword) {
      return res.status(401).send({ errorMessage: 'E-mail ou mot de passe incorrect' });
    }

    // eslint-disable-next-line max-len
    result.token = jwt.sign(result, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ result });
  },
};

module.exports = authController;
