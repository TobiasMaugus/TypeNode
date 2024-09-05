import { Request, Response } from "express";
import ListCategoryService from "../../../services/Category/ListCategoryService";

class ListCategoryController{
    constructor(private listCategoryService:ListCategoryService){}

    handle(request: Request, response:Response):Response{
        const all = this.listCategoryService.execute();
        return response.json(all);
    }
}

export default ListCategoryController;