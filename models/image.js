const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({
    title :String,
    image : {
        type:String,
        required:true,
    },
    size:String,
    // timestamps:true,

})

const ImageModel = mongoose.model('image',ImageSchema);
module.exports = ImageModel;