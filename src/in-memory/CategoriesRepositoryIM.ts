import Category from "../entities/Category";
import { ICreateCategoryDTO, ICategoriesRepository } from "../Interfaces/Category/ICreateCategory";

class CategoriesRepositoryInMemory implements ICategoriesRepository{
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find((category)=>category.name===name);
        return category; 
    }
    async read(): Promise<Category[]> {
       const all = this.categories;
       return all;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, {name, description});
        this.categories.push(category);
    }
}

export default CategoriesRepositoryInMemory;