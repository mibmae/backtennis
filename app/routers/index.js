/**
 * Router principal
 */
const express = require('express');
const router = express.Router();
const baseUrl = process.env.BASE_URL;

const articleRouter = require('./articleRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const picsRouter = require('./picsRouter');
const pagingRouter = require('./pagingRouter');
const bandeauRouter = require('./bandeauRouter');
const errorsMiddleware = require('../middlewares/errorsMiddleware');
const authController = require('../controllers/authController');

// Route Welcome
router.get(`/`, (_, response) => {
    // response.status(200).json({
    //     statusText: "Bienvenue",
    //     message: 'Welcome to my API'
    // });
    response.send('<h1>Partie Serveur</h1><div style="margin: 0 auto">Allez voir ailleurs</div>')
});
router.get('/testdb', authController.testdb);

// //routing vers les routes article
router.use(`/bandeau`, bandeauRouter);
router.use(`/articles`, articleRouter);

// // Routing vers les routers secondaires
// router.use(`/user`, userRouter);
router.use(`/auth`, authRouter);
router.use(`/picture`, picsRouter);
router.use(`/paging`, pagingRouter);

// Gestion des erreurs 404 et 500
router.use(errorsMiddleware.error404);
router.use(errorsMiddleware.error500);

module.exports = router;