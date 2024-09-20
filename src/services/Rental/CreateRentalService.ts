import { inject, injectable } from "tsyringe"
import Rental from "../../entities/Rental"
import { IRentalsRepository, IRequestRentals } from "../../Interfaces/Rental/ICreateRental"
import AppError from "../../shared/errors/AppError"

@injectable()
class CreateRentalService{
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository
    ){}

    async execute({user_id, car_id, expected_return_date}:IRequestRentals):Promise<Rental>{
        const unavailableCar = await this.rentalsRepository.findOpenRentalByCar(car_id);

        if(unavailableCar){
            throw new AppError("Car is not avaiable")
        }

        const user = await this.rentalsRepository.findOpenRentalByUser(user_id);

        if(user){
            throw new AppError("User is already renting")
        }

        const rental = await this.rentalsRepository.create({
            user_id, car_id, expected_return_date
        })

        return rental;
    }
}

export default CreateRentalService