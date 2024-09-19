import { Request, Response } from "express";
import { container } from "tsyringe";
import UploadCarImageService from "../../services/Car/UploadCarImageService";
import { IFiles } from "../../Interfaces/Car/CarImage/ICarImagesRepository";

class UploadCarImageController{
    async handle(request:Request ,response:Response):Promise<Response>{
        const {id} = request.params;
        const images = request.files as IFiles[];
        const images_names = images.map((file)=>file.filename)
        const uploadCarImageService = container.resolve(UploadCarImageService);
        await uploadCarImageService.execute({car_id:id, images_names});
        return response.status(201).send()
    }
}

export default UploadCarImageController;