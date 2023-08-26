import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
    {
        imageurl : {
            type:String,
            required:true,
        },
    },
    {   
        timestamps:true,
    },
    
)

const ImageModel = mongoose.model('image',ImageSchema);
export default ImageModel;