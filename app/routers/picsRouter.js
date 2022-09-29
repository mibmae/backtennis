const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const picController = require('../controllers/picController');
const fs = require("fs");
const path = require("path");

var cors = require('cors');
router.use(cors());
// const multer = require('multer')
// const upload = multer()

// const storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: function(req, file, cb){
//      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//   }
// });

// router.use(upload.array())
router.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));
router.use(bodyParser.json());



router.post('/upload', picController.upload)
router.get('/list', picController.list)

// router.post('/upload', picController.upload);

router.post('/delete', picController.delete);
// router.get('/all', picController.all);



module.exports = router;