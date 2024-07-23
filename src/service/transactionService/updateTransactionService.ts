import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";
import Transaction from "../../entities/Transaction";

class UpdateTransactionService {
  static async updateTransactionService(
    userId: Long,
    transactionId: Long,
    amount: number,
    description: string,
  ) {  
    const user = await userRepository.findOneBy({ id: userId }) as User;
    const transaction = await transactionRepository.findOne({
      where: { id: transactionId, user: user },
    }) as Transaction;  
    user.currentBalance = parseFloat(user.currentBalance.toString()) - transaction.amount;
    transaction.amount = amount;
    transaction.description = description;
    user.currentBalance = parseFloat(user.currentBalance.toString()) + parseFloat(amount.toString());
    await userRepository.save(user);
    
    return await transactionRepository.save(transaction);
  }
}

export default UpdateTransactionService;
