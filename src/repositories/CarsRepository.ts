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
    async listAllAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        const carsQuery = await this.repository.createQueryBuilder("c").where(
            "available = :avaiable", {avaiable: true}
        )
        if(brand){
            carsQuery.andWhere("c.brand = :brand", {brand});
        }
        if(name){
            carsQuery.andWhere("c.name = :name", {name})
        }
        if(category_id){
            carsQuery.andWhere("c.category_id = :category_id", {category_id})
        }
        const cars = await carsQuery.getMany();
        return cars;
    }

    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne({
            where:{id}
        })
        return car;
    }
}

export default CarsRepository;