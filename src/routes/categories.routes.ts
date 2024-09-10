import { Router } from "express";
import multer from "multer";

import CreateCategoryController  from "../controllers/Category/Create/CreateCategoryController";
import listCategoryController from "../controllers/Category/List";
import importCategoryController from "../controllers/Category/Import";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", (request, response)=>{
    return listCategoryController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
    return importCategoryController.handle(request, response);
});

export default categoriesRoutes;