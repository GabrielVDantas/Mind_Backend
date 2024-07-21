import { Request, Response } from "express";
import { Long } from "typeorm";
import GetTransactionsService from "../../service/transactionService/getTransactionsService";

class GetTransactionsController {
  static async getTransactionsController(req: Request, res: Response) {
    const userId = req.user.id as Long;
    try {
      const userTransactions = await GetTransactionsService.getTransactionsService(
        userId
      );
      res.json({
        message: "Transações enviadas com sucesso!",
        transaction: userTransactions,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error} - Transações não serão enviadas!` });
    }
  }
}

export default GetTransactionsController;
