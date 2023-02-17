import express from "express";
import { user, getUser } from "./controler";
const router = express.Router();

router.post("/user", user);
router.get("/user/:email", getUser);

export default router;
