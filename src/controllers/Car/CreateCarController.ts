import CreateCarService from "../../services/Car/CreateCarService";
import { Request, Response } from "express";
import { container } from "tsyringe";

class CreateCarController{
    async handle(request:Request, response:Response):Promise<Response>{
        const{name,
            description, 
            daily_rate, 
            license_plate,
            fine_amount,
            brand, 
            category_id}=request.body;

        const createCarService = container.resolve(CreateCarService);

        await createCarService.execute({
            name,
            description, 
            daily_rate, 
            license_plate,
            fine_amount,
            brand, 
            category_id})

         return response.status(201).send();
    }
}

export default CreateCarController;