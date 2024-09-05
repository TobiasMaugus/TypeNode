import Specification from "../models/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../Interfaces/Specification/ICreateSpecification";

class SpecificationsRepository implements ISpecificationsRepository{
    private specifications: Specification[];
    private static INSTANCE: SpecificationsRepository;

    private constructor(){
        this.specifications=[]
    }

    public static getInstance():SpecificationsRepository{
        if(!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({name, description}:ICreateSpecificationDTO){
        const category= new Specification(); 
        Object.assign(category, {
            name,
            description,
            created_at:new Date()
        })

        this.specifications.push(category);
    }

    read():Specification[] {
        return this.specifications;
    }

    findByName(name: string):Specification{
        const category=this.specifications.find((category)=>category.name === name);
        return category;
    }

}

export default SpecificationsRepository;