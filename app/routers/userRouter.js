const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

router.get('/admin/user', isAdmin, userController.getAll);
router.post('/admin/user', isAdmin, userController.add);

router.patch('/admin/user/password/:id', isAdmin, userController.updatePasswordByAdmin);
router.patch('/admin/user/:id', isAdmin, userController.update);
router.delete('/admin/user/:id', isAdmin, userController.delete);

router.patch('/user/:id', isLogged, userController.updatePasswordByUser);

module.exports = router;
