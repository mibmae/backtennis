require('dotenv').config();
const express = require('express');

const routers = require('./app/routers');
const bodySanitizer = require('./app/middlewares/bodySanitizer');
const cors = require('cors');
const multer  = require('multer');
const bodyParser = require("body-parser");

const app = express();
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Directory outside app path
      cb(null, './pics');
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split('/')[1];
      cb(null, `img-${Date.now()}.${ext}`);
    }
  });

  const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload an image.', 400), false);
    }
  };

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
  });
 
app.use(cors());

// app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(routers);
// Middleware permettant de "nettoyer" le body = écarte les caractères HTML
app.use(bodySanitizer);




// app.post('/upload', upload.array('pics', 12), function (req, res, next) {
//     const response = [];
//     for(let i=0;i<req.files.length;i++){
//       response.push(req.files[i].path);
//     }
//     return res.json({upload: response});
//   });


// Lancement du server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});