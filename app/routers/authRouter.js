const { Router } = require('express');

const authController = require('../controllers/authController');

const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validations/validate');

const { post: authPostShema } = require('../validations/schemas/auth.schema');

const router = Router();

router.post('/auth', validate(authPostShema, 'body'), controllerHandler(authController.login));

module.exports = router;
