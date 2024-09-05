import Especification from "../../models/Especification";

interface ICreateEspecificationDTO{
    name: string
    description: string
}

interface IEspecificationsRepository{
    findByName(name:string): Especification;
    read(): Especification[];
    create({name, description}:ICreateEspecificationDTO):void;
}

export{ICreateEspecificationDTO, IEspecificationsRepository}