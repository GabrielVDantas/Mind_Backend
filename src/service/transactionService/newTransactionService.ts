import { Long } from "typeorm";
import transactionRepository from "../../repositories/transactionRepository";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import categoryRepository from "../../repositories/categoryRepository";
import Category from "../../entities/Category";

class NewTransactionService {
  static async newTransactionService(
    userId: Long,
    description: string,
    amount: number,
    category: string
  ) {
    const user = (await userRepository.findOneBy({ id: userId })) as User;
    user.currentBalance =
      parseFloat(user.currentBalance.toString()) +
      parseFloat(amount.toString());
    await userRepository.save(user);
    const dbCateogry = (await categoryRepository.findOneBy({
      name: category,
    })) as Category;
    const newTransaction = transactionRepository.create({
      description,
      amount,
      category: dbCateogry,
      user,
    });
    return await transactionRepository.save(newTransaction);
  }
}

export default NewTransactionService;
