//IMPORTS
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import microCors from 'micro-cors'; // Import micro-cors

import UploadRoute from './routes/UploadRoutes.js';

dotenv.config();

// MIDDLEWARES
const app = express();

const cors = microCors({
  origin: 'https://zanime-frontend.vercel.app', // Allow requests from the specified domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers)
});

app.use(cors); // Use micro-cors as middleware
app.use(express.json());


// ROUTES
app.use(UploadRoute);

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server Running on Port: http://localhost:${process.env.PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// Export the Express API
export default app;
