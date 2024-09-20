import Rental from "../../entities/Rental";
import { IRentalsRepository, IRequestRentals } from "../../Interfaces/Rental/ICreateRental";

class RentalsRepositoryInMemory implements IRentalsRepository{
    rentals: Rental[] = []

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return this.rentals.find((rental)=>rental.car_id===car_id && rental.end_date === null)
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.rentals.find((rental)=>rental.user_id===user_id && rental.end_date === null)
    }

    async create({ user_id, car_id, expected_return_date }: IRequestRentals): Promise<Rental> {
        const rental = new Rental();
        Object.assign(rental, {user_id,car_id, expected_return_date})

        this.rentals.push(rental);
        return rental;
    }
}

export default RentalsRepositoryInMemory;