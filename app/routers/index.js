const express = require('express');

const authRouter = require('./authRouter');
const houseRouter = require('./houseRouter');
const pointRouter = require('./pointRouter');
const roleRouter = require('./roleRouter');
const studentRouter = require('./studentRouter');
const userRouter = require('./userRouter');

const router = express.Router();

router.use(authRouter);
router.use(houseRouter);
router.use(pointRouter);
router.use(roleRouter);
router.use(studentRouter);
router.use(userRouter);

router.get('/', (_, res) => { res.render('home'); });

module.exports = router;
