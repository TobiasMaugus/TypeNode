import CategoriesRepository from "../../repositories/CategoriesRepository";
import CreateCategoryController from "./CreateCategoryController";
import CreateCategoryService from "../../services/CreateCategoryService";

const categoriesRepository = new CategoriesRepository();
const createCategoryService = new CreateCategoryService(categoriesRepository);
const createCategoryController = new CreateCategoryController(createCategoryService);

export {createCategoryController};