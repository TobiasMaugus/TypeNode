import { Request, Response } from "express";
import ListSpecificationService from "../../services/Specification/ListSpecificationService";
import { container } from "tsyringe";
class ListSpecificationController{

    async handle(request: Request, response:Response):Promise<Response>{
        const listSpecificationService = container.resolve(ListSpecificationService); 
        const all = await listSpecificationService.execute();
        return response.json(all);
    }
}

export default ListSpecificationController;