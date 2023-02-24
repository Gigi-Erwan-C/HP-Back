const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const roleController = require('../controllers/roleController');
const studentController = require('../controllers/studentController');
const houseController = require('../controllers/houseController');
const pointController = require('../controllers/pointController');
const authController = require('../controllers/authController');

const isAdmin = require('../middlewares/isAdmin');

router.post('/auth', authController.login);

router.get('/admin/user', isAdmin, userController.getAll);
router.post('/admin/user', userController.add);

router.get('/admin/user/:id', userController.getOne);
router.patch('/admin/user/:id', userController.update);
router.delete('/admin/user/:id', userController.delete);

router.patch('/user/:id', userController.updatePassword);

router.get('/student', studentController.getAll);
router.post('/admin/student', studentController.addStudent);
router.get('/admin/student/:id', studentController.getOne);
router.patch('/admin/student/:id', studentController.update);
router.delete('/admin/student/:id', studentController.delete);

router.get('/house', houseController.getAll);
router.get('/house/:id', houseController.getOne);
router.get('/house/:id/student', houseController.getAllStudentsFromOneHouse);
router.patch('/admin/house/:id', houseController.update);

router.get('/point', pointController.getAll);
router.post('/point', pointController.add);
router.get('/point/:id', pointController.getOne);
router.patch('/point/:id', pointController.update);
router.delete('/point/:id', pointController.delete);

router.get('/role', roleController.getRole);

module.exports = router;
