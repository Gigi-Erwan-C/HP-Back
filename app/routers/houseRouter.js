const { Router } = require('express');

const houseController = require('../controllers/houseController');

const router = Router();

router.get('/house/total-score', houseController.getAllWithScore);
router.patch('/admin/house/:id', houseController.update);

module.exports = router;
