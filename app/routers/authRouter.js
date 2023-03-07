const { Router } = require('express');

const authController = require('../controllers/authController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const router = Router();

router.post('/auth', controllerHandler(authController.login));

module.exports = router;
