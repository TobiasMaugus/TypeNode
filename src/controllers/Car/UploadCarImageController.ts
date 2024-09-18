import { Request, Response } from "express";
import { container } from "tsyringe";

class UploadCarImageController{
    async handle(request:Request ,response:Response):Promise<Response>{
        return response
    }
}

export default UploadCarImageController;