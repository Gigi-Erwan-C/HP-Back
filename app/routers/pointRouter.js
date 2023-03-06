const { Router } = require('express');

const pointController = require('../controllers/pointController');
const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

const router = Router();

router.get('/point', isAdmin, pointController.getAll);
router.post('/point/add', isLogged, pointController.add);
router.post('/point/remove', isLogged, pointController.remove);
router.get('/point/:id', isAdmin, pointController.getOne);
router.patch('/point/:id', isAdmin, pointController.update);
router.delete('/point/:id', isAdmin, pointController.delete);

module.exports = router;
