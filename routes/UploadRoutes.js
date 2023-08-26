import express from "express";
import {upload,status, fill} from '../controllers/action.js';



const router = express.Router();


router.get('/', status)
router.post('/api/save',upload)
router.get('/api/fill',fill)

export default router;
