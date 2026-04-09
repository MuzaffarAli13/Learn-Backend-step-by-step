import express from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser, welCome } from "../controller/user.controller.js";

const router = express.Router();

router.get("/welcome",welCome);
router.post("/",createUser);
router.get("/",getAllUsers);
router.get("/:id",getUserById);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

export default router;