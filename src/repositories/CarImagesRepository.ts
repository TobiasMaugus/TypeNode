import { Repository } from "typeorm";
import CarImage from "../entities/CarImage";
import { ICarImagesRepository } from "../Interfaces/Car/CarImage/ICarImagesRepository";
import AppDataSource from "../database";


class  CarImagesRepository implements ICarImagesRepository{
    private repository: Repository<CarImage>;

    constructor(){
        this.repository = AppDataSource.getRepository(CarImage);
    }

    async create(car_id: string, image_name: string): Promise<CarImage> {
        const carImage = this.repository.create({
            car_id,
            image_name
        });
        await this.repository.save(carImage);
        return carImage
    }
}

export default CarImagesRepository;