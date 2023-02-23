/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const dataMapper = require('../models/dataMapper');

const userController = {
  async getAll(_, res) {
    const users = await dataMapper.getAllUsers();
    res.json(users);
  },

  async add(req, res) {
    const {
      // eslint-disable-next-line camelcase
      lastname, firstname, email, password, role_id,
    } = req.body;

    if (!emailValidator.validate(email)) {
      res.status(400).send({ message: 'L\'email renseigné est dans un format invalide.' });
      return;
    }

    if (!password || password.length < 4) {
      res.status(400).send({ message: 'Le mot de passe doit faire plus de 4 caractères.' });
      return;
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const user = await dataMapper.addUser({
      lastname,
      firstname,
      email,
      password: encryptedPassword,
      // eslint-disable-next-line camelcase
      role_id,
    });
    res.json(user);
  },

  async getOne(req, res) {
    const { id } = req.params;
    const user = await dataMapper.getOneUser(id);
    res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      // eslint-disable-next-line camelcase
      lastname, firstname, email, password, role_id,
    } = req.body;

    if (!emailValidator.validate(email)) {
      res.status(400).send({ message: 'L\'email renseigné est dans un format invalide.' });
      return;
    }

    if (!password || password.length < 4) {
      res.status(400).send({ message: 'Le mot de passe doit faire plus de 4 caractères.' });
      return;
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const result = await dataMapper.updateUser({
      lastname,
      firstname,
      email,
      password: encryptedPassword,
      // eslint-disable-next-line camelcase
      role_id,
      id,
    });
    res.json(result);
  },

  async delete(req, res) {
    const { id } = req.params;
    await dataMapper.deleteUser(id);
    res.send('user deleted');
  },
};

module.exports = userController;
