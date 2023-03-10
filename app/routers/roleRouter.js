const { Router } = require('express');

const roleController = require('../controllers/roleController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const router = Router();

router.get('/role', controllerHandler(roleController.getRole));
router.get('/role/test', controllerHandler(roleController.getTest));

module.exports = router;
