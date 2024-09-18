import Specification from "../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../Interfaces/Specification/ICreateSpecification";
import { Repository } from "typeorm";
import AppDataSource from "../database";

class SpecificationsRepository implements ISpecificationsRepository{
   
    private repository: Repository<Specification>

    constructor(){
        this.repository = AppDataSource.getRepository(Specification); 
    }

   
    async create({name, description}:ICreateSpecificationDTO):Promise<void>{
        const specification = this.repository.create({
            name,
            description
        });
        await this.repository.save(specification);
    }

    async read():Promise<Specification[]> {
        const specification = await this.repository.find()
        return specification
    }

    async findByName(name: string):Promise<Specification>{
        const specification= await this.repository.findOne({
            where:{name}
        });
        return specification
    }
    
    async findByIds(ids: string[]): Promise<Specification[]> {
        return
    }

}

export default SpecificationsRepository;