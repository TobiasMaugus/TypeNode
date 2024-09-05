import { Request, Response } from "express";
import CreateEspecificationService from "../../../services/Especification/CreateEspecificationService";


class CreateEspecificationController{

    constructor(private createEspecificationService:CreateEspecificationService){

    }

    handle(request: Request, response:Response): Response{
        const {name, description} = request.body;
        this.createEspecificationService.execute({name, description});

        return response.status(201).send();
    }
}

export default CreateEspecificationController;