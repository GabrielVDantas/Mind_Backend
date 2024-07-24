import { Request, Response } from "express";
import { Long } from "typeorm";
import UpdateTransactionService from "../../service/transactionService/updateTransactionService";

class UpdateTransactionController {
  static async updateTransactionController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const { transactionId } = req.params;
    const { amount, description, category } = req.body;
    const transactionIdAsLong = transactionId as unknown as Long;
       
    try {
      const updatedTransaction =
        await UpdateTransactionService.updateTransactionService(
          userId,
          transactionIdAsLong,
          amount,
          description,
          category,
        );
      res.json({
        message: "Transação atualizada com sucesso!",
        transaction: updatedTransaction,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Transação não será atualizada!` });
    }
  }
}

export default UpdateTransactionController;
