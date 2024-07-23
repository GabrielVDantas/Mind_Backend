import { Request, Response } from "express";
import NewTransactionService from "../../service/transactionService/newTransactionService";
import { Long } from "typeorm";

class NewTransactionController {
  static async newTransactionController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const { title, description, amount } = req.body;
    try {
      const newTransaction =
        await NewTransactionService.newTransactionService(userId, title, description, amount);
      res.status(201).json({
        message: "Transação registrada com sucesso!",
        transaction: newTransaction,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Transação não será registrada!` });
    }
  }
}

export default NewTransactionController;
