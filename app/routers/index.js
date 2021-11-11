const express = require('express');
const router = express.Router();
const baseUrl = process.env.BASE_URL;

const apiRouter = require('./apiRouter');
const errorsMiddleware = require('../middlewares/errorsMiddleware');

router.get(`${baseUrl}/`, (_, response) => {
    response.status(200).json({
        message: 'Welcome to my API'
    });
});

router.use(`/${baseUrl}api`, apiRouter);

router.use(errorsMiddleware.error404);
router.use(errorsMiddleware.error500);

module.exports = router;