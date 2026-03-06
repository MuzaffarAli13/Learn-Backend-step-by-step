import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, home, userUpdate } from "../controllers/users.js";
import { authMiddleware, myMiddleware } from "../middleware/users.js";

const router = Router();

router.route("/").get(myMiddleware,home)// get all users
router.route("/users").get(authMiddleware,getAllUsers)// get all users
router.route("/users/:id").get(authMiddleware,getUser)// get user from params
router.route("/users").post(authMiddleware,createUser)// create user
router.route("/users/:id").put(authMiddleware,userUpdate)// update user
router.route("/users/:id").delete(authMiddleware,deleteUser)// delete user

export default router