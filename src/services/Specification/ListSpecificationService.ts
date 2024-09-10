import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";
import Specification from "../../entities/Specification";

@injectable()
class ListSpecificationService{
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository:ISpecificationsRepository){}

    async execute():Promise<Specification[]>{
        const specifications = await this.specificationsRepository.read();
        return specifications;
    }
}
export default ListSpecificationService;