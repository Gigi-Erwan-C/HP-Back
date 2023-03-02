const { Router } = require('express');

const pointController = require('../controllers/pointController');

const router = Router();

router.get('/point', pointController.getAll);
router.post('/point/add', pointController.add);
router.post('/point/remove', pointController.remove);
router.get('/point/:id', pointController.getOne);
router.patch('/point/:id', pointController.update);
router.delete('/point/:id', pointController.delete);

module.exports = router;
