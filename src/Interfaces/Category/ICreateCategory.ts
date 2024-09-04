import Category from "../../models/Category"

interface ICreateCategoryDTO{
    name: string
    description: string
}

interface ICategoriesRepository{
    findByName(name:string): Category;
    read(): Category[];
    create({name, description}:ICreateCategoryDTO):void;
}

export{ICreateCategoryDTO, ICategoriesRepository}