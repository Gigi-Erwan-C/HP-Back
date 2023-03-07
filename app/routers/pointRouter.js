const { Router } = require('express');

const pointController = require('../controllers/pointController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/point', isAdmin, controllerHandler(pointController.getAll));
router.post('/point/add', isLogged, controllerHandler(pointController.add));
router.post('/point/remove', isLogged, controllerHandler(pointController.remove));
router.get('/point/:id', isAdmin, controllerHandler(pointController.getOne));
router.patch('/point/:id', isAdmin, controllerHandler(pointController.update));
router.delete('/point/:id', isAdmin, controllerHandler(pointController.delete));

module.exports = router;
