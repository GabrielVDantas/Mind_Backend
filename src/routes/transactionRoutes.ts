import { Router } from "express";
import NewTransactionController from "../controller/transactionController/newTransactionController";
import AuthMiddleware from "../middleware/authMiddleware";

const transactionRoutes = Router();

transactionRoutes.use(AuthMiddleware.authMiddleware);

transactionRoutes.post(
  "/new-transaction",
  NewTransactionController.newTransactionController
);

export default transactionRoutes;
