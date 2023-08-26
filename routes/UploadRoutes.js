const {Router} = require('express');
const upload = require('../middleware/multer');
const ImageModel = require('../models/image');

const router = Router();

router.get('/api/fill', async (req,res)=>{
    try {
        const allimg = await ImageModel.find().sort({ createdAt: "descending" });
        res.status(200).json(allimg);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get('/home', (req, res) => {
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
