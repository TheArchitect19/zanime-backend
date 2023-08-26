const {Router} = require('express');
const upload = require('../middleware/multer');
const ImageModel = require('../models/image');

const router = Router();

router.get('/api/fill', async (req,res)=>{
    const allimg = await ImageModel.find().sort({createdAt :"descending"})
    // res.status(200).json(allimg)
    res.status(200).json("hello")
})

router.get('/home', async (req, res) => {
 const allimg = await ImageModel.find().sort({createdAt :"descending"})
  res.status(200).json('Welcome, your app is working well');
})

router.post('/api/save',upload.single('file') ,(req,res)=>{
    ImageModel.create({image:req.file.filename})
    .then((data) =>{
        console.log("uploaded successfully....");
        console.log(data);
        res.send(data)
    })
    .catch((err) =>console.log(err));
})


module.exports = router;
