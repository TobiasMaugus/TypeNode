import { Repository } from "typeorm";
import CarImage from "../entities/CarImage";
import { ICarImagesRepository } from "../Interfaces/CarImage/ICarImagesRepository";
import AppDataSource from "../database";


class  CarImageRepository implements ICarImagesRepository{
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

export default CarImageRepository;