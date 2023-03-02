const { Router } = require('express');

const userController = require('../controllers/userController');

const router = Router();

const isAdmin = require('../middlewares/isAdmin');

router.get('/admin/user', isAdmin, userController.getAll);
router.post('/admin/user', userController.add);

router.get('/admin/user/:id', userController.getOne);
router.patch('/admin/user/:id', userController.update);
router.delete('/admin/user/:id', userController.delete);

router.patch('/user/:id', userController.updatePassword);

module.exports = router;
