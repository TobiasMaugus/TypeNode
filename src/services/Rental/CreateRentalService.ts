import { inject, injectable } from "tsyringe"
import Rental from "../../entities/Rental"
import { IRentalsRepository } from "../../Interfaces/Rental/ICreateRental"

@injectable()
class CreateRentalService{
    constructor(){}

    async execute():Promise<void>{

    }
}

export default CreateRentalService