import express from 'express'
import {register, userLoggedIn } from '../controller/user.js';

const router = express.Router();


router.post("/register",register);
router.post("/login",userLoggedIn);

export default router

