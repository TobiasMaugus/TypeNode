import { Router } from "express";
import multer from "multer";

import CreateCategoryController  from "../controllers/Category/CreateCategoryController";
import ListCategoryController from "../controllers/Category/ListCategoryController";
import ImportCategoryController from "../controllers/Category/ImportCategoryController";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", createCategoryController.handle)

const listCategoryController = new ListCategoryController();
categoriesRoutes.get("/", listCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export default categoriesRoutes;