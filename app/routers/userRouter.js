const { Router } = require('express');

const userController = require('../controllers/userController');

const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validations/validate');

const {
  post: userPostSchema,
  patch: userPatchSchema,
  patchPasswordAdmin: userPatchPasswordAdmin,
  patchPasswordUser: userPatchPasswordUser,
} = require('../validations/schemas/user.schema');

const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

const router = Router();

router.get('/admin/user', isAdmin, controllerHandler(userController.getAll));
router.post('/admin/user', validate(userPostSchema, 'body'), isAdmin, controllerHandler(userController.add));

router.patch('/admin/user/password/:id([0-9]+)', validate(userPatchPasswordAdmin, 'body'),isAdmin, controllerHandler(userController.updatePasswordByAdmin));
router.patch('/admin/user/:id([0-9]+)', validate(userPatchSchema, 'body'), isAdmin, controllerHandler(userController.update));
router.delete('/admin/user/:id([0-9]+)', isAdmin, controllerHandler(userController.delete));

router.patch('/user/:id([0-9]+)', validate(userPatchPasswordUser, 'body'), isLogged, controllerHandler(userController.updatePasswordByUser));

module.exports = router;
