import { Request, Response } from "express";
import { container } from "tsyringe";
import ListCarsService from "../../services/Car/ListCarsService";

class ListCarsController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {brand, name, category_id} = request.query;

        const listCarsService = container.resolve(ListCarsService);
        const cars = await listCarsService.execute({
            brand: brand as string,
            name: name as string,
            category_id: category_id as string  
        })
        return response.json(cars);
    }
}

export default ListCarsController;