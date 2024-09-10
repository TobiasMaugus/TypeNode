import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";
import Specification from "../../entities/Specification";

class ListSpecificationService{
    constructor(private specificationsRepository:ISpecificationsRepository){}

    execute():Specification[]{
        const specifications = this.specificationsRepository.read();
        return specifications;
    }
}
export default ListSpecificationService;