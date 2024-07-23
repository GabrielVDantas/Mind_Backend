import { database } from "../config/database";
import Category from "../entities/Category";

const categoryRepository = database.getRepository(Category);

export default categoryRepository;