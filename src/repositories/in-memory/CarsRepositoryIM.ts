import Car from "../../entities/Car";
import Specification from "../../entities/Specification";
import { ICarsRepository, ICreateCarDTO } from "../../Interfaces/Car/ICreateCar";



class CarsRepositoryInMemory implements ICarsRepository{
    cars: Car[]=[];

    async create({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: ICreateCarDTO): Promise<void> {
        const car =  new Car();
        Object.assign(car, {
            name, description, daily_rate, license_plate, fine_amount, brand, category_id
        });
        this.cars.push(car);
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find(car =>car.license_plate === license_plate);
    }

    async listAllAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        return this.cars.filter(car => car.available && (
            (!category_id || car.category_id === category_id) &&
            (!brand || car.brand === brand) &&
            (!name || car.name === name)
        ));
    }

    async findById(id: string): Promise<Car> {
        return this.cars.find((car)=>car.id===id);
    }

    async update (id:string, name:string, description:string, daily_rate:number, license_plate:string,
        fine_amount:number, brand:string, category_id:string, specifications:Specification[]):Promise<void>
    {
        const carIndex = this.cars.findIndex(car => car.id === id);

    if (carIndex >= 0) {
        this.cars[carIndex] = {
            ...this.cars[carIndex],
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
            specifications,
        };
    }
    }
}

export default CarsRepositoryInMemory;