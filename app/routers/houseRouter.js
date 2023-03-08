const { Router } = require('express');

const houseController = require('../controllers/houseController');

const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validations/validate');

const { patch: housePatchSchemas } = require('../validations/schemas/house.schema');

const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/house/total-score', controllerHandler(houseController.getAllWithScore));
router.patch('/admin/house/:id([0-9]+)', validate(housePatchSchemas, 'body'), isAdmin, controllerHandler(houseController.update));

module.exports = router;
