import { Router } from "express";
import userRoutes from "./userRoutes";
import transactionRoutes from "./transactionRoutes";

const indexRoutes = Router();

indexRoutes.use(userRoutes);
indexRoutes.use(transactionRoutes);

export default indexRoutes;