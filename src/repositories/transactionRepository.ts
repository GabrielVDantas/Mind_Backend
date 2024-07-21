import { database } from "../config/database";
import Transaction from "../entities/Transaction";

const transactionRepository = database.getRepository(Transaction);

export default transactionRepository;