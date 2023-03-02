const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const authDataMapper = require('../models/authDataMapper');
const { authDataMapper } = require('../models/index');

const authController = {
  // eslint-disable-next-line consistent-return
  async login(req, res) {
    const { email, password } = req.body;

    const result = await authDataMapper.getOneUserByEmail(email);

    if (!result) {
      return res.status(401).json({ message: 'E-mail ou mot de passe incorrecte' });
    }
    const isMatchingPassword = await bcrypt.compare(password, result.password);

    if (!isMatchingPassword) {
      return res.status(401).send({ errorMessage: 'E-mail ou mot de passe incorrecte' });
    }
    result.isLogged = true;
    // eslint-disable-next-line max-len
    result.token = jwt.sign(result, process.env.JWT_SECRET, { expiresIn: '90d' });
    res.status(200).json({ result });
  },
};

module.exports = authController;
