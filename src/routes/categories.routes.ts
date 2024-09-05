import { request, response, Router } from "express";
import multer from "multer";

import createCategoryController from "../controllers/Category/Create";
import listCategoryController from "../controllers/Category/List";
import importCategoryController from "../controllers/Category/Import";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

categoriesRoutes.post("/", (request, response)=>{
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response)=>{
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
    return importCategoryController.handle(request, response);
});

export default categoriesRoutes;