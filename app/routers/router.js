const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const studentController = require('../controllers/studentController');
const houseController = require('../controllers/houseController');

router.get('/admin/user', userController.getAll);
router.post('/admin/user', userController.add);

router.get('/admin/user/:id', userController.getOne);
router.patch('/admin/user/:id', userController.update);
router.delete('/admin/user/:id', userController.delete);

router.get('/admin/student', studentController.getAll);
router.post('/admin/student', studentController.addStudent);

router.get('/house', houseController.getAll);
router.get('/house/:id', houseController.getOne);
router.patch('/admin/house/:id', houseController.update);

router.get('/role', roleController.getRole);

module.exports = router;
