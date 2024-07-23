import Category, { Categories } from "../../entities/Category";
import categoryRepository from "../../repositories/categoryRepository";

class CategoryService {
  static categoryService() {
    const walletControlCategories = Object.values(Categories);

    for (let name of walletControlCategories) {
      const existingCategory = categoryRepository.findOneBy({ name });

      if (!existingCategory) {
        const newCategory = new Category();
        newCategory.name = name;

        categoryRepository.save(newCategory);
      }
    }
    console.log("Categorias verificadas!");
  }
}

export default CategoryService;
