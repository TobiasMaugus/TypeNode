import ImportCategoryController from "./ImportCategoryController"
import ImportCategoryService from "../../../services/Category/ImportCategoryService";


const importCategoryService = new ImportCategoryService()
const importCategoryController = new ImportCategoryController(importCategoryService);

export default importCategoryController;