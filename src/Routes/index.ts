import express from "express";
import authRoutes from "../api/auth/routes";
import notesRote from "../Api/note/routes";
const routes = express.Router();

routes.use("/auth", authRoutes);
routes.use("/note", notesRote);

export default routes;
