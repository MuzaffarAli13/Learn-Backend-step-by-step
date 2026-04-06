import expres from "express";
import { welCome } from "../controller/user.controller";

const router = expres.Router();


router.get("/",welCome)



export default router