import { Request, Response } from "express";
import { Long } from "typeorm";
import DeleteTransactionService from "../../service/transactionService/deleteTransactionService";

class DeleteTransactionController {
  static async deleteTransactionController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const { transactionId } = req.body;

    try {
      await DeleteTransactionService.deleteTransactionService(
        userId,
        transactionId
      );
      res.status(204).json({
        message: "Transação deletada com sucesso!",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Transação não serão deletada!` });
    }
  }
}

export default DeleteTransactionController;
