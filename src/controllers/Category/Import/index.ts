import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryService from "../../../services/Category/ImportCategoryService";
import CategoriesRepository from "../../../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const importCategoryService = new ImportCategoryService(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryService);

export default importCategoryController;