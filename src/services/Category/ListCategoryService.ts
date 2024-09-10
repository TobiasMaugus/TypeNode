import { ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import Category from "../../entities/Category";

class ListCategoryService{
    constructor(private categoriesRepository:ICategoriesRepository){}

    execute():Category[]{
        const categories = this.categoriesRepository.read();
        return categories;
    }
}
export default ListCategoryService;