import { Request, Response } from "express"
import ImportCategoryService from "../../services/Category/ImportCategoryService";
import { container } from "tsyringe";

class ImportCategoryController{

    async handle(request: Request, response:Response):Promise<Response>{
        const importCategoryService = container.resolve(ImportCategoryService)
        const{file} = request;
        await importCategoryService.execute(file);
        return response.send();
    }
}

export default ImportCategoryController