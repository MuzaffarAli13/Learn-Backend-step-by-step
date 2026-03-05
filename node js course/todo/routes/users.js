import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, userUpdate } from "../controllers/users.js";

const router = Router();

router.route("/users").get(getAllUsers)// get all users
router.route("/users/:id").get(getUser)// get user from params
router.route("/users").post(createUser)// create user
router.route("/users/:id").put(userUpdate)// update user
router.route("/users/:id").delete(deleteUser)// delete user

export default router