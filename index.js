//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';

import UploadRoute from './routes/UploadRoutes.js';

dotenv.config();




//MIDDLEWARES
const app = express();


const corsOptions = {
  origin: '*', // Allow requests from all domains
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers)
};



app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('public'));


//ROUTES
app.use(UploadRoute);


const PORT = process.env.PORT ;

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));


// Export the Express API
export default app;