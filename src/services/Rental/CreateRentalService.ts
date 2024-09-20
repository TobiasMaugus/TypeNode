import { inject, injectable } from "tsyringe"
import Rental from "../../entities/Rental"
import { IRentalsRepository, IRequestRentals } from "../../Interfaces/Rental/ICreateRental"
import AppError from "../../shared/errors/AppError"
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)

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

        const expectedReturnDateFormat = dayjs(expected_return_date).utc().local().format();
        const dateNow =  dayjs().utc().local().format();
        const compare = dayjs(expectedReturnDateFormat).diff(dateNow, "hours");
        const minimumHour = 24;
        if(compare < minimumHour){
            throw new AppError("rental has to be longer than 24 hours")
        }

        const rental = await this.rentalsRepository.create({
            user_id, car_id, expected_return_date
        })

        return rental;
    }
}

export default CreateRentalService