import { Repository } from "typeorm";
import AppDataSource from "../database";
import Rental from "../entities/Rental";
import { IRentalsRepository, IRequestRentals } from "../Interfaces/Rental/ICreateRental";

class RentalsRepository implements IRentalsRepository{
    private repository: Repository<Rental>

    constructor(){
        this.repository = AppDataSource.getRepository(Rental);
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const openByCar = await this.repository.findOne({
            where:{car_id}
        })
        return openByCar;
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const openByUser = await this.repository.findOne({
            where:{user_id}
        })
        return openByUser;
    }
    async create({ user_id, car_id, expected_return_date }: IRequestRentals): Promise<Rental> {
       const rental = this.repository.create({
            user_id,
            car_id,
            expected_return_date
       })

       await this.repository.save(rental);
       return rental;
    }

}

export default RentalsRepository;