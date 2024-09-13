import { ICreateCategoryDTO, ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";
import { inject, injectable } from "tsyringe";
import "reflect-metadata";
import AppError from "../../shared/errors/AppError";

@injectable()
class CreateCategoryService{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ){}

    async execute({name, description}:ICreateCategoryDTO):Promise<void>{
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new AppError("Category Already Exists!");
        }
        this.categoriesRepository.create({name, description});    
    }
}
export default CreateCategoryService;