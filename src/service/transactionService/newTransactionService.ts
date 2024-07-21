import { Long } from "typeorm";
import transactionRepository from "../../repositories/transactionRepository";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";

class NewTransactionService {
  static async newTransactionService(userId: Long, description: string, amount: number) {
    const user = await userRepository.findOneBy({ id: userId }) as User;
    const newTransaction = transactionRepository.create({
      description,
      amount,
      user
    });
    return await transactionRepository.save(newTransaction);
  }
}

export default NewTransactionService;
