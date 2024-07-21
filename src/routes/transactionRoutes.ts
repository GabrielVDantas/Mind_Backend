import { Router } from "express";
import NewTransactionController from "../controller/transactionController/newTransactionController";
import AuthMiddleware from "../middleware/authMiddleware";
import GetTransactionsController from "../controller/transactionController/getTransactionsController";
import UpdateTransactionController from "../controller/transactionController/updateTransactionController";

const transactionRoutes = Router();

transactionRoutes.use(AuthMiddleware.authMiddleware);

transactionRoutes.post(
  "/new-transaction",
  NewTransactionController.newTransactionController
);

transactionRoutes.get(
  "/my-transactions",
  GetTransactionsController.getTransactionsController
);

transactionRoutes.put(
  "/update-transaction-:about",
  UpdateTransactionController.updateTransactionController
);

export default transactionRoutes;
