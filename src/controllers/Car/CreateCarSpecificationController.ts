import CreateCarSpecificationService from "../../services/Car/CreateCarSpecificationService";
import { container } from "tsyringe";
import { Request, Response } from "express";

class CreateCarSpecificationController{
    async handle(request:Request, response:Response){
        const {id} = request.params;
        const {specifications_id} = request.body;

        const createCarSpecificationService = container.resolve(CreateCarSpecificationService);
        const cars = await createCarSpecificationService.execute({car_id:id, specifications_id:specifications_id})
        
        return response.status(201).send()
    }
}


export default CreateCarSpecificationController;