/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
// const userDataMapper = require('../models/userDataMapper');
const { userDataMapper } = require('../models/index');

const userController = {
  async getAll(_, res) {
    const users = await userDataMapper.getAllUsers();
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

    const user = await userDataMapper.addUser({
      lastname,
      firstname,
      email,
      password: encryptedPassword,
      // eslint-disable-next-line camelcase
      role_id,
    });
    res.json(user);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      // eslint-disable-next-line camelcase
      lastname, firstname, email, role_id,
    } = req.body;

    if (!emailValidator.validate(email)) {
      res.status(400).send({ message: 'L\'email renseigné est dans un format invalide.' });
      return;
    }

    const result = await userDataMapper.updateUser({
      lastname,
      firstname,
      email,
      // eslint-disable-next-line camelcase
      role_id,
      id,
    });
    res.json(result);
  },

  async updatePasswordByAdmin(req, res) {
    const { id } = req.params;
    const { password } = req.body;

    if (!password || password.length < 4) {
      res.status(400).send({ message: 'Le mot de passe doit faire plus de 4 caractères.' });
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const result = await userDataMapper.updatePasswordByAdmin({
      password: encryptedPassword,
      id,
    });
    res.json(result);
  },

  async delete(req, res) {
    const { id } = req.params;
    await userDataMapper.deleteUser(id);
    res.send('user deleted');
  },

  async updatePasswordByUser(req, res) {
    const { id } = req.params;
    const {
      oldPassword, password, confirmation,
    } = req.body;

    const user = await userDataMapper.getOneUser(id);
    if (!user) {
      res.status(401).send({ errorMessage: 'Le mot de passe ou la combinaison est incorrecte.' });
      return;
    }

    const isMatchingPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isMatchingPassword) {
      res.status(401).send({ errorMessage: 'L\'ancien mot de passe est incorrecte.' });
      return;
    }

    if (!oldPassword || !password || password.length < 4) {
      res.status(400).send({ message: 'Le mot de passe doit faire plus de 4 caractères ou l\'ancien mot de passe est incorrect.' });
      return;
    }

    if (password !== confirmation) {
      res.status(400).send({ errorMessage: 'Le mot de passe et sa confirmation ne correspondent pas.' });
      return;
    }

    const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);

    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    const result = await userDataMapper.updatePasswordByUser({
      password: encryptedPassword,
      id,
    });
    res.json(result);
  },
};

module.exports = userController;
