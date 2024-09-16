import AppDataSource from "../database";
import Car from "../entities/Car";
import { ICarsRepository, ICreateCarDTO } from "../Interfaces/Car/ICreateCar";
import { Repository } from "typeorm";


class CarsRepository implements ICarsRepository{

    private repository: Repository<Car>;

    constructor(){
        this.repository = AppDataSource.getRepository(Car);
    }

    async create({name,
        description, 
        daily_rate, 
        license_plate,
        fine_amount,
        brand, 
        category_id}: ICreateCarDTO): Promise<void> 
    {
        const car = this.repository.create({
            name,
            description, 
            daily_rate, 
            license_plate,
            fine_amount,
            brand, 
            category_id
        });
        
        this.repository.save(car);
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({
            where:{license_plate}
        })
        return car;
    }

}

export default CarsRepository;