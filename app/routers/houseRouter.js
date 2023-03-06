const { Router } = require('express');

const houseController = require('../controllers/houseController');
const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/house/total-score', houseController.getAllWithScore);
router.patch('/admin/house/:id', isAdmin, houseController.update);

module.exports = router;
