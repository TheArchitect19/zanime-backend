import ImageModel from "../models/image.js";


// server status
export const status = (req, res) => {
    res.status(200).send('I am alive');
}


// upload image
export const upload = async (req, res) => {
    const {imgurl} = req.body;
    console.log(imgurl)
    if(!imgurl){
        return res.status(400).json({error:"All fields are required"});
    }
    try {
        const img = await ImageModel.create({
            imageurl :imgurl
        });

        res.status(201).json({
            success:true,
            img,
        })
    } catch (error) {
        console.log(error)
        res.status(400);
        throw error;
    }
}

//populate images
export const fill = async (req,res)=>{
    try {
        const allimg = await ImageModel.find();
        res.status(200).json(allimg);
    } catch (error) {
        console.error("Error fetching images:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

