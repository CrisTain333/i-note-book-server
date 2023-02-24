import express from "express";
import { getNotes, saveNotes } from "./controler";
const router = express.Router();

router.post("/", saveNotes);
router.get("/:email", getNotes);

export default router;
