import { request, response, Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";
import { createCategoryController } from "../controllers/Category";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response)=>{
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response)=>{
    const all = categoriesRepository.read();

    return response.json(all);
})

export default categoriesRoutes;