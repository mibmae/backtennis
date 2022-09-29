/**
 * Router secondaire
 */
 const express = require('express');
 const router = express.Router();
 
 const controller = require('../controllers/bandeauController');
 const authMiddleware = require('../middlewares/authMiddleware');
 
 // Routing
 router.get('/all', controller.findAll);
 router.get('/alladmin', controller.findAllAdmin);
//  router.get('/alladmin', controller.findAllAdmin);
 router.get('/:id(\\d+)', controller.findById);
 router.get('/next/:id(\\d+)', controller.findNext);
 router.get('/prev/:id(\\d+)', controller.findPrev);
//  router.get('/id/:id', controller.findById);
//  router.get('/slug/:slug', controller.findBySlug);
//  router.get('/del/:id', controller.delArticle);
 router.post('/modify/:id', controller.modifyBandeau);
  router.post('/secure/add', authMiddleware.verifyAdmin, controller.addBandeau);
  router.post('/delete/:id', controller.deleteBandeau);
  router.post('/secure/toggle/:id/:status', authMiddleware.verifyAdmin, controller.toggleOnline);
//  router.post('/modifystatut/:id/:statut', controller.modifyStatut);
//  router.post('/modifyallstatus/:statut', controller.modifyAllStatut);

 
 module.exports = router;