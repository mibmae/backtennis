/**
 * Router secondaire
 */
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Routing
router.get('/all', userController.findAll);
router.get('/:id(\\d+)', userController.findById);

// Routing avec vérification du token
router.get('/secure/all', authMiddleware.verifyToken, userController.findAll);
router.get('/secure/:id(\\d+)', authMiddleware.verifyToken, userController.findById);

module.exports = router;