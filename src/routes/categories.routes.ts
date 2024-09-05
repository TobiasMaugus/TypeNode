import { request, response, Router } from "express";


import createCategoryController from "../controllers/Category/Create";
import listCategoryController from "../controllers/Category/List";

const categoriesRoutes = Router();


categoriesRoutes.post("/", (request, response)=>{
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response)=>{
    return listCategoryController.handle(request, response);
})

export default categoriesRoutes;