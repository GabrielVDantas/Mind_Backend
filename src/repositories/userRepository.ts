import { database } from "../config/database";
import User from "../entities/User";

const userRepository = database.getRepository(User);

export default userRepository;