import { Request, Response } from "express";
import ListEspecificationService from "../../../services/Especification/ListEspecificationService";

class ListEspecificationController{
    constructor(private listEspecificationService:ListEspecificationService){}

    handle(request: Request, response:Response):Response{
        const all = this.listEspecificationService.execute();
        return response.json(all);
    }
}

export default ListEspecificationController;