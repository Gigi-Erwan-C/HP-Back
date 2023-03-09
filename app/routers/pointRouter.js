const { Router } = require('express');

const pointController = require('../controllers/pointController');

const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validations/validate');

const { post: pointPostSchema, patch: pointPatchSchema } = require('../validations/schemas/point.schema');

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/point/log', isLogged, controllerHandler(pointController.getAllLogs));

router.get('/point', isLogged, controllerHandler(pointController.getAll));

router.post('/point/add', validate(pointPostSchema, 'body'), isLogged, controllerHandler(pointController.add));
router.post('/point/remove', validate(pointPostSchema, 'body'), isLogged, controllerHandler(pointController.remove));
router.get('/point/:id([0-9]+)', isAdmin, controllerHandler(pointController.getOne));
router.patch('/point/:id([0-9]+)', validate(pointPatchSchema, 'body'), isAdmin, controllerHandler(pointController.update));
router.delete('/point/:id([0-9]+)', isAdmin, controllerHandler(pointController.delete));

module.exports = router;
