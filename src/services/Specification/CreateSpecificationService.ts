import { inject, injectable } from "tsyringe";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";

@injectable()
class CreateSpecificationService{
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository){}

    async execute({name, description}:ICreateSpecificationDTO):Promise<void>{
        const specificationsAlreadyExists = await this.specificationsRepository.findByName(name);
        if(specificationsAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.specificationsRepository.create({name, description});    
    }
}
export default CreateSpecificationService;