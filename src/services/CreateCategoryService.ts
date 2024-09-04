import { ICreateCategoryDTO } from "../Interfaces/Category/ICreateCategory";
import CategoriesRepository from "../repositories/CategoriesRepository";

class CreateCategoryService{
    constructor(private categoriesRepository: CategoriesRepository){}

    execute({name, description}:ICreateCategoryDTO){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({name, description});    
    }
}
export default CreateCategoryService;