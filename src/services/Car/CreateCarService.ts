import {injectable, inject} from "tsyringe";
import { ICarsRepository, ICreateCarDTO } from "../../Interfaces/Car/ICreateCar";
import AppError from "../../shared/errors/AppError";

//@injectable()
class CreateCarService{

    constructor(
        //@inject("CarsRepository")
        private carsRepository: ICarsRepository
    ){}

    async execute(
        {name,
        description, 
        daily_rate, 
        license_plate,
        fine_amount,
        brand, 
        category_id}:ICreateCarDTO):Promise<void>
    {

        const carAlreadyExists = await this.carsRepository.findByLicensePlate(license_plate);

        if(carAlreadyExists){
            throw new AppError("Car Already Exists");
        }

        this.carsRepository.create({
            name,
            description, 
            daily_rate, 
            license_plate,
            fine_amount,
            brand, 
            category_id
        });     
    }

}

export default CreateCarService