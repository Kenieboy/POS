import express from "express";
const router = express.Router();
import {
  register,
  login,
  logout,
  profile,
} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/profile", authMiddleware, profile);

export default router;
