import express from "express";
import { getNotes, getSingleNote, saveNotes } from "./controler";
const router = express.Router();

router.post("/", saveNotes);
router.get("/:email", getNotes);
router.get("/single/:id", getSingleNote);

export default router;
