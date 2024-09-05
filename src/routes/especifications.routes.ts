import { request, response, Router } from "express";

import EspecificationRepository from "../repositories/EspecificationsRepository";
import {createEspecificationController} from "../controllers/Especification";

const especificationsRoutes = Router();
const especificationsRepository = new EspecificationRepository();


especificationsRoutes.post("/", (request, response)=>{
    return createEspecificationController.handle(request, response);
});

especificationsRoutes.get("/", (request, response)=>{
    const all = especificationsRepository.read();

    return response.json(all);
})

export default especificationsRoutes;