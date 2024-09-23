import { container } from "tsyringe";
import { Request, response, Response } from "express";
import CreateRentalService from "../../services/Rental/CreateRentalService";

class CreateRentalController{
    async handle(request:Request, response:Response):Promise<Response>{
        const {car_id, expected_return_date, user_id} = request.body;
        const createRentalService = container.resolve(CreateRentalService);
        const rental = await createRentalService.execute({
            car_id,
            expected_return_date,
            user_id
        })
            return response.status(201).json(rental);
        }      
}


export default CreateRentalController