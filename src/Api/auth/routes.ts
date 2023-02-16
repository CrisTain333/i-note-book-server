import express from "express";
import { getUser, login, registerUser } from "./controler";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/user", getUser);

export default router;
