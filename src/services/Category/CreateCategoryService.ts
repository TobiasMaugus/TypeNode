import { ICreateCategoryDTO, ICategoriesRepository } from "../../Interfaces/Category/ICreateCategory";


class CreateCategoryService{
    constructor(private categoriesRepository: ICategoriesRepository){}

    execute({name, description}:ICreateCategoryDTO){
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({name, description});    
    }
}
export default CreateCategoryService;