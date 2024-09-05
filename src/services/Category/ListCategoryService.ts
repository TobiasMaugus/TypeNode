import { ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import Category from "../../models/Category";

class ListCategoryService{
    constructor(private categoriesRepository:ICategoriesRepository){}

    execute():Category[]{
        const categories = this.categoriesRepository.read();
        return categories;
    }
}
export default ListCategoryService;