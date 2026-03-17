import express from "express";

import { showSignup, signupUser } from "../controllers/userController.js";
import { showLogin, loginUser, logoutUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/signup",showSignup);
router.get("/login",showLogin);
router.post("/login",loginUser);
router.get("/logout",logoutUser);

router.post("/signup",signupUser);

export default router;