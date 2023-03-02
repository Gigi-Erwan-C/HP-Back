const { Router } = require('express');

const roleController = require('../controllers/roleController');

const router = Router();

router.get('/role', roleController.getRole);

module.exports = router;
