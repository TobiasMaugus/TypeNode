import Category from "../models/Category";
import { ICreateCategoryDTO, ICategoriesRepository } from "../Interfaces/Category/ICreateCategory";

class CategoriesRepository implements ICategoriesRepository{
    private categories: Category[];

    constructor(){
        this.categories=[]
    }

    create({name, description}:ICreateCategoryDTO){
        const category= new Category(); 
        Object.assign(category, {
            name,
            description,
            created_at:new Date()
        })

        this.categories.push(category);
    }

    read():Category[] {
        return this.categories;
    }

    findByName(name: string):Category{
        const category=this.categories.find((category)=>category.name === name);
        return category;
    }

}

export default CategoriesRepository;