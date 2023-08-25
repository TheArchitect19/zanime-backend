const multer = require('multer')
const {v4:uuidv4} =require('uuid')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, './public/Images')
    },
    filename: (req, file, cb) =>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})

const fileFilter =(req,file,cb) =>{
    const allowedFileTypes =["image/jpeg", "image/jpg" , "image/png"]
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const upload = multer({
    storage,fileFilter
})

module.exports = upload;