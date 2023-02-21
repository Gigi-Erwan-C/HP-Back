const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const studentController = require('../controllers/studentController');
const houseController = require('../controllers/houseController');
const pointController = require('../controllers/pointController');

router.get('/admin/user', userController.getAll);
router.post('/admin/user', userController.add);

router.get('/admin/user/:id', userController.getOne);
router.patch('/admin/user/:id', userController.update);
router.delete('/admin/user/:id', userController.delete);

router.get('/student', studentController.getAll);
router.post('/admin/student', studentController.addStudent);
router.get('/admin/student/:id', studentController.getOne);

router.get('/house', houseController.getAll);
router.get('/house/:id', houseController.getOne);
router.get('/house/:id/student', houseController.getAllStudentsFromOneHouse);
router.patch('/admin/house/:id', houseController.update);

router.get('/point', pointController.getAll);
router.post('/point', pointController.add);

router.get('/role', roleController.getRole);

module.exports = router;
