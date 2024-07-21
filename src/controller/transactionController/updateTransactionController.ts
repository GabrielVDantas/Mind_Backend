import { Request, Response } from "express";
import { Long } from "typeorm";
import UpdateTransactionService from "../../service/transactionService/updateTransactionService";

class UpdateTransactionController {
  static async updateTransactionController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    const about = req.params.about;
    const data = req.body[about] as unknown;
    const { transactionId } = req.body;
    try {
      const updatedTransaction =
        await UpdateTransactionService.updateTransactionService(
          userId,
          transactionId,
          about,
          data,
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
