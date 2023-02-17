import express from "express";
import { user } from "./controler";

const router = express.Router();

router.post("/user", user);

export default router;
