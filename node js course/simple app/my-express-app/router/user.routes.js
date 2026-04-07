import expres from "express";
import { deleteUser, getAllUsers, getUserbyId, updateUser, userCreate, welCome } from "../controller/user.controller.js";


const router = expres.Router();


router.get("/welome", welCome);
router.post("/",userCreate);
router.get("/",getAllUsers);
router.get("/:id",getUserbyId);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);




export default router