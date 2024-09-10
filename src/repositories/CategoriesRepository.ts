import { Repository } from "typeorm";
import AppDataSource from "../database";
import Category from "../entities/Category";
import { ICreateCategoryDTO, ICategoriesRepository } from "../Interfaces/Category/ICreateCategory";

class CategoriesRepository implements ICategoriesRepository{
   
   
    private repository: Repository<Category>

    constructor(){
        this.repository = AppDataSource.getRepository(Category);  
    }
    // private static INSTANCE: CategoriesRepository;//singleton
    // public static getInstance():CategoriesRepository{
    //     if(!CategoriesRepository.INSTANCE){
    //         CategoriesRepository.INSTANCE = new CategoriesRepository();
    //     }
    //     return CategoriesRepository.INSTANCE;
    // }

    async create({name, description}:ICreateCategoryDTO):Promise<void>{
        const category = this.repository.create({
            name,
            description
        });
        await this.repository.save(category);
    }

    async read():Promise<Category[]> {
        const categories = await this.repository.find()
        return categories
    }

    async findByName(name: string):Promise<Category>{
        const category= await this.repository.findOne({
            where:{name}
        });
        return category;
    }

}

export default CategoriesRepository;