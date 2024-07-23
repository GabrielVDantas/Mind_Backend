import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";
import Transaction from "../../entities/Transaction";

class DeleteTransactionService {
  static async deleteTransactionService(userId: Long, transactionId: Long) {
    const user = await userRepository.findOneBy({ id: userId }) as User;
    const transaction = await transactionRepository.findOne({
      where: { id: transactionId, user: user },
    }) as Transaction;
    user.currentBalance = parseFloat(user.currentBalance.toString()) - transaction.amount;
    await userRepository.save(user);
    return await transactionRepository.delete({id: transaction.id});    
  }
}

export default DeleteTransactionService;
