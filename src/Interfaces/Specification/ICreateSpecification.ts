import Specification from "../../entities/Specification";

interface ICreateSpecificationDTO{
    name: string
    description: string
}

interface ISpecificationsRepository{
    findByName(name:string): Promise<Specification>;
    read(): Promise<Specification[]>;
    create({name, description}:ICreateSpecificationDTO):Promise<void>;
    findByIds(ids:string[]):Promise<Specification[]>
}

export{ICreateSpecificationDTO, ISpecificationsRepository}