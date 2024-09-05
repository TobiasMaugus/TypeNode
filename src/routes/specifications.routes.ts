import { request, response, Router } from "express";

import listSpecificationController from "../controllers/Specification/List";
import createSpecificationController from "../controllers/Specification/Create";

const specificationsRoutes = Router();



specificationsRoutes.post("/", (request, response)=>{
    return createSpecificationController.handle(request, response);
});

specificationsRoutes.get("/", (request, response)=>{
    return listSpecificationController.handle(request, response);
})

export default specificationsRoutes;