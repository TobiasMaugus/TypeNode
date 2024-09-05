import CategoriesRepository from "../../../repositories/CategoriesRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryService from "../../../services/Category/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export default createCategoryController;