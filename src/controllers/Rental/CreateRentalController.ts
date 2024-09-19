import { container } from "tsyringe";
import { Request, Response } from "express";
import CreateRentalService from "../../services/Rental/CreateRentalService";

class CreateRentalController{
    async handle(request:Request, response:Response):Promise<Response>{
        return response;
    }
}

export default CreateRentalController