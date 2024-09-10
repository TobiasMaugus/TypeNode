import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import Category from "../../entities/Category";

@injectable()
class ListCategoryService{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository:ICategoriesRepository){}

    async execute():Promise<Category[]>{
        const categories = await this.categoriesRepository.read();
        return categories;
    }
}
export default ListCategoryService;