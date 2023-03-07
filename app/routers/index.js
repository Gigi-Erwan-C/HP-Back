const express = require('express');

// Imports pour la documentation Swagger
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

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

// On branche la documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// On affiche la view home à la racine
router.get('/', (_, res) => { res.render('home'); });

// On redirige toutes les requêtes perdues sur la route de documentation
router.use((req, res) => {
  res.redirect('/api-docs');
});

module.exports = router;
