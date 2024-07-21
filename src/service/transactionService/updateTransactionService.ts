import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";
import Transaction from "../../entities/Transaction";

class UpdateTransactionService {
  static async updateTransactionService(
    userId: Long,
    transactionId: Long,
    about: string,
    data: unknown,
  ) {
    const user = await userRepository.findOneBy({ id: userId }) as User;
    const transaction = await transactionRepository.findOne({
      where: { id: transactionId, user: user },
    }) as Transaction;
    about === "description"
      ? (transaction.description = String(data))
      : (transaction.amount = Number(data));
    return transactionRepository.save(transaction);
  }
}

export default UpdateTransactionService;
