/**
 * Router secondaire
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers');

// Routing
router.get('/all', controller.findAll);
router.get('/:id(\\d+)', controller.findById);

module.exports = router;