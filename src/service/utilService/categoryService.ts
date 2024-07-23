import Category, { Categories } from "../../entities/Category";
import categoryRepository from "../../repositories/categoryRepository";

class CategoryService {
  static async categoryService() {
    const walletControlCategories = Object.values(Categories);

    for (let name of walletControlCategories) {
      const existingCategory = await categoryRepository.findOneBy({ name });

      if (!existingCategory) {
        const newCategory = new Category();
        newCategory.name = name;

        await categoryRepository.save(newCategory);
      }
    }
    console.log("Categorias verificadas!");
  }
}

export default CategoryService;
