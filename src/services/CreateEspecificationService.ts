import { ICreateEspecificationDTO, IEspecificationRepository } from "../Interfaces/Especification/ICreateEspecification";


class CreateEspecificationService{
    constructor(private especificationsRepository: IEspecificationRepository){}

    execute({name, description}:ICreateEspecificationDTO){
        const especificationsAlreadyExists = this.especificationsRepository.findByName(name);
        if(especificationsAlreadyExists){
            throw new Error("Category Already Exists!");
        }
        this.especificationsRepository.create({name, description});    
    }
}
export default CreateEspecificationService;