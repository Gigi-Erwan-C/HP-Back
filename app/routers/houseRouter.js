const { Router } = require('express');

const houseController = require('../controllers/houseController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/house/total-score', controllerHandler(houseController.getAllWithScore));
router.patch('/admin/house/:id', isAdmin, controllerHandler(houseController.update));

module.exports = router;
