import { Router } from "express";
import multer from "multer";

import CreateCategoryController  from "../../controllers/Category/CreateCategoryController";
import ListCategoryController from "../../controllers/Category/ListCategoryController";
import ImportCategoryController from "../../controllers/Category/ImportCategoryController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/EnsureAdmin";

const categoriesRoutes = Router();
const upload = multer({
    dest: "./tmp"
});

const createCategoryController = new CreateCategoryController();
categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, createCategoryController.handle)

const listCategoryController = new ListCategoryController();
categoriesRoutes.get("/", listCategoryController.handle);

const importCategoryController = new ImportCategoryController();
categoriesRoutes.post("/import", upload.single("file"), ensureAuthenticated, ensureAdmin, importCategoryController.handle);

export default categoriesRoutes;