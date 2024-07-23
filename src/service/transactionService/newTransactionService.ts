import { Long } from "typeorm";
import transactionRepository from "../../repositories/transactionRepository";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";

class NewTransactionService {
  static async newTransactionService(
    userId: Long,
    title: string,
    description: string,
    amount: number
  ) {
    const user = (await userRepository.findOneBy({ id: userId })) as User;
    user.currentBalance = parseFloat(user.currentBalance.toString()) + parseFloat(amount.toString());
    await userRepository.save(user);    
    const newTransaction = transactionRepository.create({
      title,
      description,
      amount,
      user,
    });
    return await transactionRepository.save(newTransaction);
  }
}

export default NewTransactionService;
