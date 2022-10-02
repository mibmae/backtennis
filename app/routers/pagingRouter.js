/**
 * Router secondaire
 */
 const express = require('express');
 const router = express.Router();
 
 const controller = require('../controllers/pagingController');
 const authMiddleware = require('../middlewares/authMiddleware');
 
 // Routing
 router.get('/all', controller.findAll);


 
 module.exports = router;