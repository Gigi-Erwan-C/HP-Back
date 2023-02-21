const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
<<<<<<< HEAD
const studentController = require('../controllers/studentController');
=======
const houseController = require('../controllers/houseController');
>>>>>>> method-get-house-id

router.get('/admin/user', userController.getAll);
router.post('/admin/user', userController.add);

router.get('/admin/user/:id', userController.getOne);
router.patch('/admin/user/:id', userController.update);
router.delete('/admin/user/:id', userController.delete);

<<<<<<< HEAD
router.get('/admin/student', studentController.getAll);
=======
router.get('/house/:id', houseController.getOne);
>>>>>>> method-get-house-id

router.get('/role', roleController.getRole);

module.exports = router;
