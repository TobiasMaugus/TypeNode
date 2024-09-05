import { Request, Response } from "express";
import ListSpecificationService from "../../../services/Specification/ListSpecificationService";

class ListSpecificationController{
    constructor(private listSpecificationService:ListSpecificationService){}

    handle(request: Request, response:Response):Response{
        const all = this.listSpecificationService.execute();
        return response.json(all);
    }
}

export default ListSpecificationController;