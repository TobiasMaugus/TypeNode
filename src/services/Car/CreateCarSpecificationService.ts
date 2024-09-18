import { inject, injectable } from "tsyringe";
import ICreateCarEspecification from "../../Interfaces/Car/ICreateCarSpecification";
import { ICarsRepository } from "../../Interfaces/Car/ICreateCar";
import AppError from "../../shared/errors/AppError";
import { ISpecificationsRepository } from "../../Interfaces/Specification/ICreateSpecification";

@injectable()
class CreateCarSpecificationService{

    constructor(
        @inject("CarsRepository")
        private carsRepository:ICarsRepository,
        @inject("SpecificationsRepository")
        private specificationsRepository:ISpecificationsRepository
    ){}

    async execute({car_id, specifications_id}:ICreateCarEspecification):Promise<void>{
        const carExists = await this.carsRepository.findById(car_id);
        if(!carExists){
            throw new AppError("Car does not exists");
        }
        const specifications = await this.specificationsRepository.findByIds(specifications_id);
        carExists.specifications = specifications;

        await this.carsRepository.update(carExists.id, carExists.name, carExists.description,
            carExists.daily_rate, carExists.license_plate, carExists.fine_amount, carExists.brand,
            carExists.category_id, carExists.specifications
        );
    }
}

export default CreateCarSpecificationService;