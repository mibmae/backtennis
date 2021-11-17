/**
 * Router secondaire
 */
const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Routing
router.get('/all', userController.findAll);
router.get('/:id(\\d+)', userController.findById);

module.exports = router;