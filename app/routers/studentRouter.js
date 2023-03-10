const { Router } = require('express');

const studentController = require('../controllers/studentController');

const controllerHandler = require('../controllers/helpers/controllerHandler');
const validate = require('../validations/validate');

const { post: studentPostSchema, patch: studentPatchSchema } = require('../validations/schemas/student.schema');

const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

const router = Router();

router.get('/student', controllerHandler(studentController.getAllWithHouseName));
router.get('/student/top5', controllerHandler(studentController.getTopFive));
router.get('/student/total-score-and-house', isLogged, controllerHandler(studentController.getAllWithHouseAndTotalScore));
router.post('/admin/student', validate(studentPostSchema, 'body'), isAdmin, controllerHandler(studentController.addStudent));
router.patch('/admin/student/:id([0-9]+)', validate(studentPatchSchema, 'body'), isAdmin, controllerHandler(studentController.update));
router.delete('/admin/student/:id([0-9]+)', isAdmin, controllerHandler(studentController.delete));

module.exports = router;
