import CarImage from "../../../entities/CarImage";

interface ICarImagesRepository{
    create(car_id:string, image_name:string):Promise<CarImage>;
}

interface IRequestCarImage{
    car_id:string;
    images_names: string[];
}

interface IFiles{
    filename:string;
}

export {ICarImagesRepository, IRequestCarImage, IFiles};