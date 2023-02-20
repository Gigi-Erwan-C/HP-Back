const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');

router.get('/admin/user', userController.getAll);
router.get('/role', roleController.getRole);
router.post('/admin/user', userController.add);

module.exports = router;
