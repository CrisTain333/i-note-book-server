import express from "express";
import authRoutes from "../api/auth/routes";

const routes = express.Router();

routes.use("/auth", authRoutes);

export default routes;
