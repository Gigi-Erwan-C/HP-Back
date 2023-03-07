const { Router } = require('express');

const userController = require('../controllers/userController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

const router = Router();

router.get('/admin/user', isAdmin, controllerHandler(userController.getAll));
router.post('/admin/user', isAdmin, controllerHandler(userController.add));

router.patch('/admin/user/password/:id', isAdmin, controllerHandler(userController.updatePasswordByAdmin));
router.patch('/admin/user/:id', isAdmin, controllerHandler(userController.update));
router.delete('/admin/user/:id', isAdmin, controllerHandler(userController.delete));

router.patch('/user/:id', isLogged, controllerHandler(userController.updatePasswordByUser));

module.exports = router;
