import Car from "../../entities/Car";

interface ICreateCarDTO{
    name: string;
    description: string;
    daily_rate: number;
    license_plate:string;
    fine_amount:number;
    brand: string;
    category_id:string;
}

interface ICarsRepository{
    create(data: ICreateCarDTO): Promise<void>;  
    findByLicensePlate(license_plate:string):Promise<Car>;
    listAllAvailable(category_id?:string, brand?: string, name?:string):Promise<Car[]>;  
}

export {ICreateCarDTO, ICarsRepository};