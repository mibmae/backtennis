const express = require('express');
const errorsMiddleware = require('../middlewares/errorsMiddleware');
const router = express.Router();
const baseUrl = process.env.BASE_URL;

router.get(`${baseUrl}/`, (_, response) => {
    response.status(200).json({
        message: 'Welcome to my API'
    });
});

router.use(errorsMiddleware.error404);
router.use(errorsMiddleware.error500);

module.exports = router;