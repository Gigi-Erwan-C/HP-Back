const { Router } = require('express');

const authController = require('../controllers/authController');

const router = Router();

router.post('/auth', authController.login);

module.exports = router;
