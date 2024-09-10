import { Request, Response } from "express";
import ListCategoryService from "../../services/Category/ListCategoryService";
import { container } from "tsyringe";

class ListCategoryController{

    async handle(request: Request, response:Response):Promise<Response>{
        const listCategoryService = container.resolve(ListCategoryService);
        const all = await listCategoryService.execute();
        return response.json(all);
    }
}

export default ListCategoryController;