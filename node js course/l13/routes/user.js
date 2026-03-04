import express from "express";
import { login, register } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/isAuthinticated.js";

const router = express.Router();

router.route("/register").post(isAuthenticated,register)
router.route("/login").post(login);

export default router;
