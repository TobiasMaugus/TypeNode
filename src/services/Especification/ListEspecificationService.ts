import { IEspecificationsRepository } from "../../Interfaces/Especification/ICreateEspecification";
import Especification from "../../models/Especification";

class ListEspecificationService{
    constructor(private especificationsRepository:IEspecificationsRepository){}

    execute():Especification[]{
        const especifications = this.especificationsRepository.read();
        return especifications;
    }
}
export default ListEspecificationService;