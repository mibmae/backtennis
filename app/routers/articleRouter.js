/**
 * Router secondaire
 */
 const express = require('express');
 const router = express.Router();
 
 const controller = require('../controllers/articleController');
 const authMiddleware = require('../middlewares/authMiddleware');
 // Routing
 router.get('/all', controller.findAll);
 router.get('/alladmin', controller.findAllAdmin);
 // router.get('/:id(\\d+)', controller.findById);

 router.get('/next/:id(\\d+)', controller.findNext);
 router.get('/prev/:id(\\d+)', controller.findPrev);


 router.get('/:id', controller.findById);
 router.get('/slug/:slug', controller.findBySlug);
 router.post('/secure/delete/:id',authMiddleware.verifyAdmin, controller.delArticle);
 router.post('/modify/:id', controller.modifyArticle);
 router.post('/modifystatut/:id/:statut', controller.modifyStatut);
 router.post('/modifyallstatus/:statut', controller.modifyAllStatut);
 router.post('/secure/add', authMiddleware.verifyAdmin, controller.addArticle);
 router.post('/secure/toggle/:id/:status', authMiddleware.verifyAdmin, controller.toggleOnline);
 
 module.exports = router;