const { Router } = require('express');

const studentController = require('../controllers/studentController');

const controllerHandler = require('../controllers/helpers/controllerHandler');

const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

const router = Router();

router.get('/student', controllerHandler(studentController.getAllWithHouseName));
router.get('/student/top5', controllerHandler(studentController.getTopFive));
router.get('/student/total-score-and-house', isLogged, controllerHandler(studentController.getAllWithHouseAndTotalScore));
router.post('/admin/student', isAdmin, controllerHandler(studentController.addStudent));
router.patch('/admin/student/:id', isAdmin, controllerHandler(studentController.update));
router.delete('/admin/student/:id', isAdmin, controllerHandler(studentController.delete));

module.exports = router;
