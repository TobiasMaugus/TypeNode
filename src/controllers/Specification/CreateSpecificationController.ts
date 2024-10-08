import { Request, Response } from "express";
import CreateSpecificationService from "../../services/Specification/CreateSpecificationService";
import { container } from "tsyringe";

class CreateSpecificationController{

    handle(request: Request, response:Response): Response{
        const {name, description} = request.body;
        const createSpecificationService = container.resolve(CreateSpecificationService);
        createSpecificationService.execute({name, description});

        return response.status(201).send();
    }
}

export default CreateSpecificationController;