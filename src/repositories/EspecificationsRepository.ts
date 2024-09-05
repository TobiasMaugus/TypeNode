import Especification from "../models/Especification";
import { ICreateEspecificationDTO, IEspecificationsRepository } from "../Interfaces/Especification/ICreateEspecification";

class EspecificationsRepository implements IEspecificationsRepository{
    private especifications: Especification[];
    private static INSTANCE: EspecificationsRepository;

    private constructor(){
        this.especifications=[]
    }

    public static getInstance():EspecificationsRepository{
        if(!EspecificationsRepository.INSTANCE){
            EspecificationsRepository.INSTANCE = new EspecificationsRepository();
        }
        return EspecificationsRepository.INSTANCE;
    }

    create({name, description}:ICreateEspecificationDTO){
        const category= new Especification(); 
        Object.assign(category, {
            name,
            description,
            created_at:new Date()
        })

        this.especifications.push(category);
    }

    read():Especification[] {
        return this.especifications;
    }

    findByName(name: string):Especification{
        const category=this.especifications.find((category)=>category.name === name);
        return category;
    }

}

export default EspecificationsRepository;