import { Router } from "express";
import userRoutes from "./userRoutes";

const indexRoutes = Router();

indexRoutes.use(userRoutes);

export default indexRoutes;