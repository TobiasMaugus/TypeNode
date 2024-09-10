import { Router } from "express";

import listSpecificationController from "../controllers/Specification/List";
import CreateSpecificationController from "../controllers/Specification/CreateSpecificationController";

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController()
specificationsRoutes.post("/", createSpecificationController.handle)

specificationsRoutes.get("/", (request, response)=>{
    return listSpecificationController.handle(request, response);
})

export default specificationsRoutes;