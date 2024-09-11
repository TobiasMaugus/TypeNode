import { Request, Response } from "express";
import CreateUserService from "../../services/User/CreateUserService";
import { container } from "tsyringe";

class CreateUserController{

    async handle(request: Request, response:Response): Promise<Response>{
        const createUserService = container.resolve(CreateUserService);
        const {name, email, password, driver_license} = request.body;
        await createUserService.execute({name, email, password, driver_license});

        return response.status(201).send();
    }
}

export default CreateUserController;