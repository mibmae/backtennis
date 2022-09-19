/**
 * Router principal
 */
const express = require('express');
const router = express.Router();
const baseUrl = process.env.BASE_URL;

const articleRouter = require('./articleRouter');
const userRouter = require('./userRouter');
const authRouter = require('./authRouter');
const errorsMiddleware = require('../middlewares/errorsMiddleware');

// Route Welcome
router.get(`/`, (_, response) => {
    response.status(200).json({
        statusText: "Bienvenue",
        message: 'Welcome to my API'
    });
});

//routing vers les routes article
router.use(`/articles`, articleRouter);

// Routing vers les routers secondaires
router.use(`/user`, userRouter);
router.use(`/auth`, authRouter);

// Gestion des erreurs 404 et 500
router.use(errorsMiddleware.error404);
router.use(errorsMiddleware.error500);

module.exports = router;