const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dataMapper = require('../models/dataMapper');

const authController = {
  // eslint-disable-next-line consistent-return
  async login(req, res) {
    const { email, password } = req.body;
    const result = await dataMapper.checkUserInfo({
      email,
      password,
    });
    console.log(result);
    if (!result) {
      return res.status(401).json({ message: 'E-mail ou mot de passe incorrect' });
    }

    const isMatchingPassword = await bcrypt.compare(password, result.password);
    console.log(isMatchingPassword);
    if (!isMatchingPassword) {
      return res.status(401).send({ errorMessage: 'L\'email ou le mot de passe est incorrecte.' });
    }
    // eslint-disable-next-line max-len
    result.token = jwt.sign(result, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ result });
  },
};

module.exports = authController;
