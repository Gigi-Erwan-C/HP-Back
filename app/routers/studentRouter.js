const { Router } = require('express');

const studentController = require('../controllers/studentController');

const router = Router();

router.get('/student', studentController.getAllWithHouseName);
router.get('/student/top5', studentController.getTopFive);
router.get('/student/total-score-and-house', studentController.getAllWithHouseAndTotalScore);
router.get('/student/:id/score', studentController.getScoreByStudent);
router.post('/admin/student', studentController.addStudent);
router.get('/admin/student/:id', studentController.getOne);
router.patch('/admin/student/:id', studentController.update);
router.delete('/admin/student/:id', studentController.delete);

module.exports = router;
