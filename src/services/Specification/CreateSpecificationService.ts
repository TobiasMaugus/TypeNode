import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";


class CreateSpecificationService{
    constructor(private specificationsRepository: ISpecificationsRepository){}

    execute({name, description}:ICreateSpecificationDTO){
        const specificationsAlreadyExists = this.specificationsRepository.findByName(name);
        if(specificationsAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.specificationsRepository.create({name, description});    
    }
}
export default CreateSpecificationService;