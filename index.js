//IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer= require('multer');
const path = require('path');
require('dotenv').config();
const ImageModel = require('./models/image');
const UploadRoute = require('./routes/UploadRoutes')

//MIDDLEWARES
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


//ROUTES
app.use(UploadRoute);


const PORT = process.env.PORT ;

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


