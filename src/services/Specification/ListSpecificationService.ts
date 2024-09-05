import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";
import Specification from "../../models/Specification";

class ListSpecificationService{
    constructor(private specificationsRepository:ISpecificationsRepository){}

    execute():Specification[]{
        const specifications = this.specificationsRepository.read();
        return specifications;
    }
}
export default ListSpecificationService;