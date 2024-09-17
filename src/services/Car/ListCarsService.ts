import { inject, injectable } from "tsyringe";
import Car from "../../entities/Car";
import { ICarsRepository } from "../../Interfaces/Car/ICreateCar";
import IListCarsRequest from "../../Interfaces/Car/IListCars";

@injectable()
class ListCarsService {
    constructor(
        @inject("CarsRepository") // O token "CarsRepository" será usado pelo container para injetar o repositório correto
        private carsRepository: ICarsRepository
    ) {}

    async execute({ category_id, brand, name }: IListCarsRequest): Promise<Car[]> {
        const carsAvailable = await this.carsRepository.listAllAvailable(category_id, brand, name);
        return carsAvailable;
    }
}

export default ListCarsService;
