const userDataMapper = require('../dataMappers/userDataMapper');
const client = require('../dataMappers/client');
const fs = require('fs');
const multer = require('multer');
const upload = multer({dest: 'uploads/'}).single('file');
const base = 'http://localhost:3000/uploads/'


module.exports = {

    async upload(req, response, next) {
        upload(req, response, (err) => {
        fs.renameSync(`uploads/${req.file.filename}`, `uploads/${req.file.originalname}`)
        response.status(200).json({
            message: "Image ajoutée",
            address: `http://localhost:3000/uploads/${req.file.originalname}`
        })
        })
        
    },
    // );

    async list(req, res) {
        const fs = require("fs");
        let array = [];
let directory_name = "uploads";
  
// Function to get current filenames
// in directory
let filenames = fs.readdirSync(directory_name);
  


filenames.forEach((file) => {
    array.push({
        name: file,
        link: base + file,
    })
    // console.log("File:", base + file);
});

res.status(200).json({
    array    
    })
    },


    // try {
    //     const addPic = await userDataMapper.addProfilePic(path, request.body.id);       
    //     response.status(200).json({ addPic });
    // } catch (error) {
    //     console.log(error);
    // }
    // },

    async delete(request, response, next) {
        let str = request.body.src.substr(29);
        let replaced = str.replace(/%20/g, " ");
        fs.unlinkSync(replaced);

        try {
            const deletePic = await userDataMapper.delProfilePic(request.body.id);
            response.status(200).json({ deletePic });
        } catch (error) {
            console.log(error);
        }
    }
}