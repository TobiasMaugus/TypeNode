import Car from "../../entities/Car";
import Specification from "../../entities/Specification";

interface ICreateCarDTO{
    name: string;
    description: string;
    daily_rate: number;
    license_plate:string;
    fine_amount:number;
    brand: string;
    category_id:string;
    specifications?: Specification[];
}

interface ICarsRepository{
    create(data: ICreateCarDTO): Promise<void>;  
    findByLicensePlate(license_plate:string):Promise<Car>;
    listAllAvailable(category_id?:string, brand?: string, name?:string):Promise<Car[]>;  
    findById(id:string):Promise<Car>;
    update (id:string, name:string, description:string, daily_rate:number, license_plate:string,
        fine_amount:number, brand:string, category_id:string, specifications:Specification[]):Promise<void>;
}

export {ICreateCarDTO, ICarsRepository};