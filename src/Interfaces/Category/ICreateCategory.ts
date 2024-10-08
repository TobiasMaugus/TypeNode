import Category from "../../entities/Category"

interface ICreateCategoryDTO{
    name: string
    description: string
}

interface ICategoriesRepository{
    findByName(name:string): Promise<Category>;
    read(): Promise<Category[]>;
    create({name, description}:ICreateCategoryDTO):Promise<void>;
}

export{ICreateCategoryDTO, ICategoriesRepository}