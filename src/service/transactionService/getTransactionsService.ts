import { Long } from "typeorm";
import userRepository from "../../repositories/userRepository";
import User from "../../entities/User";
import transactionRepository from "../../repositories/transactionRepository";

class GetTransactionsService {
  static async getTransactionsService(userId: Long) {
    const user = await userRepository.findOneBy({ id: userId }) as User;
    return await transactionRepository.find({ where: { user } });
  }
}

export default GetTransactionsService;
