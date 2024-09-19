import { inject, injectable } from "tsyringe";
import { ICarImagesRepository, IRequestCarImage } from "../../Interfaces/Car/CarImage/ICarImagesRepository";

@injectable()
class UploadCarImageService{

    constructor(
        @inject("CarImagesRepository")
        private carImagesRepository:ICarImagesRepository){}

    async execute({car_id, images_names}:IRequestCarImage):Promise<void>{
        images_names.map(async (image)=>{
            await this.carImagesRepository.create(
                car_id, image
            );
        })
    }
}

export default UploadCarImageService;