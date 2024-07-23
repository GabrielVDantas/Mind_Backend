import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";
import Transaction from "../../entities/Transaction";
import categoryRepository from "../../repositories/categoryRepository";
import Category from "../../entities/Category";

class UpdateTransactionService {
  static async updateTransactionService(
    userId: Long,
    transactionId: Long,
    amount: number,
    description: string,
    category: string
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
    const dbCategory = await categoryRepository.findOneBy({name: category}) as Category;    
    transaction.category = dbCategory;
    const transactionUpdated = await transactionRepository.save(transaction);
    return transactionUpdated;
    
  }
}

export default UpdateTransactionService;
