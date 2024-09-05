import Specification from "../../models/Specification";

interface ICreateSpecificationDTO{
    name: string
    description: string
}

interface ISpecificationsRepository{
    findByName(name:string): Specification;
    read(): Specification[];
    create({name, description}:ICreateSpecificationDTO):void;
}

export{ICreateSpecificationDTO, ISpecificationsRepository}