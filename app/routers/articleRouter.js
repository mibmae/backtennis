/**
 * Router secondaire
 */
 const express = require('express');
 const router = express.Router();
 
 const controller = require('../controllers/articleController');
 
 // Routing
 router.get('/all', controller.findAll);
 router.get('/alladmin', controller.findAllAdmin);
 // router.get('/:id(\\d+)', controller.findById);
 router.get('/id/:id', controller.findById);
 router.get('/slug/:slug', controller.findBySlug);
 router.get('/del/:id', controller.delArticle);
 router.post('/modify/:id', controller.modifyArticle);
 router.post('/modifystatut/:id/:statut', controller.modifyStatut);
 router.post('/modifyallstatus/:statut', controller.modifyAllStatut);
 router.post('/add', controller.addArticle);
 
 module.exports = router;