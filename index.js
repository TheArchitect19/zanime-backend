//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';

import UploadRoute from './routes/UploadRoutes.js';

dotenv.config();

// MIDDLEWARES
const app = express();

// const cors = microCors({
//   origin: 'https://zanime-frontend.vercel.app', // Allow requests from the specified domain
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
//   credentials: true, // Allow credentials (cookies, authorization headers)
// });

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());


// ROUTES
app.use(UploadRoute);


const PORT = 6969 ;
const MONGO_URI ="mongodb+srv://Batman:Ayush1907@cluster0.gq3kj0c.mongodb.net/Images"

// DATABASE CONNECTION
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// Export the Express API
export default app;
