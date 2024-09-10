import { Request, Response } from "express";
import CreateCategoryService from "../../services/Category/CreateCategoryService";
import { container } from "tsyringe";

class CreateCategoryController{

    async handle(request: Request, response:Response): Promise<Response>{
        const createCategoryService = container.resolve(CreateCategoryService);
        const {name, description} = request.body;
        await createCategoryService.execute({name, description});

        return response.status(201).send();
    }
}

export default CreateCategoryController;