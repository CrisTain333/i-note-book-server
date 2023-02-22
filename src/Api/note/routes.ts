import express from "express";
import { saveNotes } from "./controler";
const router = express.Router();

router.post("/", saveNotes);

export default router;
