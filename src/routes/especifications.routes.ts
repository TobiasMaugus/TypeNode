import { request, response, Router } from "express";

import listEspecificationController from "../controllers/Especification/List";
import createEspecificationController from "../controllers/Especification/Create";

const especificationsRoutes = Router();



especificationsRoutes.post("/", (request, response)=>{
    return createEspecificationController.handle(request, response);
});

especificationsRoutes.get("/", (request, response)=>{
    return listEspecificationController.handle(request, response);
})

export default especificationsRoutes;