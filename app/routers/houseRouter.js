const { Router } = require('express');

const houseController = require('../controllers/houseController');

const router = Router();

router.get('/house', houseController.getAll);
router.get('/house/total-score', houseController.getAllHousesWithScore);
router.get('/house/:id', houseController.getOne);
router.get('/house/:id/student', houseController.getAllStudentsFromOneHouse);
router.patch('/admin/house/:id', houseController.update);

module.exports = router;
