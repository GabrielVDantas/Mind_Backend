import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";

class GetTransactionsService {
  static async getTransactionsService(userId: Long) {
    const user = (await userRepository.findOneBy({ id: userId })) as User;
    const feedTransactions = await transactionRepository.find({
      where: { user },
      relations: ["category"],
    });
    const feedTransactionsWithFormatedDate = feedTransactions.map(
      (transaction) => {
        const formatedDate = new Date(transaction.createdAt).toLocaleDateString(
          "pt-BR",
          {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }
        );
        return { ...transaction, createdAt: formatedDate };
      }
    );
    return feedTransactionsWithFormatedDate;
  }
}

export default GetTransactionsService;
