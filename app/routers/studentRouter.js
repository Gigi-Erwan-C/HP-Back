const { Router } = require('express');

const studentController = require('../controllers/studentController');
const isAdmin = require('../middlewares/isAdmin');
const isLogged = require('../middlewares/isLogged');

const router = Router();

router.get('/student', studentController.getAllWithHouseName);
router.get('/student/top5', studentController.getTopFive);
router.get('/student/total-score-and-house', isLogged, studentController.getAllWithHouseAndTotalScore);
router.post('/admin/student', isAdmin, studentController.addStudent);
router.patch('/admin/student/:id', isAdmin, studentController.update);
router.delete('/admin/student/:id', isAdmin, studentController.delete);

module.exports = router;
